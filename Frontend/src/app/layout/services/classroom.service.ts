import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Classroom } from '../models/classroom';
import { MessageService } from './message.service';
import {UrloriginService} from './urlorigin.service';
import Swal from 'sweetalert2'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClassroomService {

  private AllClassroomUrl = this.urloriginService.getUrl('classrooms/');
  private eventUrl = this.urloriginService.getUrl('events');
  private specificScheduleUrl = this.urloriginService.getUrl('specific_schedules');
  private classroomEventUrl = this.urloriginService.getUrl('classroom_events');
  private setStatusRequestUrl = this.urloriginService.getUrl('request_set_status/');
  private classroomByBuildingUrl = this.urloriginService.getUrl('building_classrooms/');

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private urloriginService: UrloriginService) { }

  /** GET faculties from the server */
  getClassroomsBuilding (building_id: number): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.classroomByBuildingUrl + building_id);
  }

  getClassroomBuilding(id: number): Observable<Classroom> {
    const url = `${this.classroomByBuildingUrl}/${id}`;
    return this.http.get<Classroom>(url).pipe(
      tap(_ => this.log(`fetched Classroom id=${id}`)),
      catchError(this.handleError<Classroom>(`getClassroom id=${id}`))
    );
  }

  getClassrooms (classroom_id: number): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this.classroomByBuildingUrl + classroom_id);
  }

  /** GET faculties from the server */
  getClassroomsAvailable (schedule): any
  {
    return this.http.get<Classroom[]>(this.AllClassroomUrl,{
      params: {
        ini_date: schedule.ini_date,
        end_date: schedule.end_date
      }
    }).map(
      response => {
        localStorage.setItem("class_ava", JSON.stringify(response))
        // alert(response[0].id)
        // console.log(response);
    },
    error => {
      Swal('Oops...', 'No hay salones disponibles!', 'error')
    }
  )
    ;
  }

  createEvent (name, description): any
  {
    return this.http.post(this.eventUrl,
      {
        "name": name,
        "description": description
      }
    ).map(
      response => {
        localStorage.setItem("event", JSON.stringify(response))
        // Swal('Se creo el evento')
        console.log(response);
    },
    error => {
      Swal('Oops...', 'Error en el servidor: Creando el evento!', 'error')
    }
  )
    ;
  }

  createSpecificSchedule (date, begin_at_hour, begin_at_minute, end_at_hour, end_at_minute): any
  {
    return this.http.post(this.specificScheduleUrl,
    {
        "specific_schedule":
      {
        "date": date,
        "begin_at_hour": begin_at_hour,
        "begin_at_minute": begin_at_minute,
        "end_at_hour": end_at_hour,
        "end_at_minute": end_at_minute
      }
    }
    ).map(
      response => {
        localStorage.setItem("s_schedule", JSON.stringify(response))
        // alert("Se creo el horario especifico")
        console.log(response);
    },
    error => {
      Swal('Oops...', 'Error en el servidor: Creando horario especifico!', 'error')
    }
  )
    ;
  }

  createClassroomEvent (event_id, specific_id, classroom_id): any
  {
    return this.http.post(this.classroomEventUrl,
      {
        "classroom_event":
      {
        "event_id":event_id,
        "specific_schedule_id": specific_id,
        "classroom_id": classroom_id
      }
    }
    ).map(
      response => {
        localStorage.setItem("classroom_event", JSON.stringify(response))
        Swal('Asignación exitosa')
        console.log(response);
    },
    error => {
      Swal('Oops...', 'Error en el servidor: Sin asignar salon al evento', 'error')
    }
  );
  }

  setStatusRequest (request_id, classroom_event_id): any
  {
    return this.http.post(this.setStatusRequestUrl,
      {
        "request_id":request_id,
        "new_state": "assigned",
        "assign_specific":
        [
          {
            "classroom_event_id": classroom_event_id
          }
        ]
      }
    ).map(
      response => {

        // localStorage.setItem("class_ava", JSON.stringify(response))
        // Swal('Se cambio el estado de la  solicitud')
        console.log(response);
    },
    error => {
      Swal('Oops...', 'Error en el servidor: Actualizando estado solicitud!', 'error')
    }
  )
    ;
  }

  getClassroom(id: number): Observable<Classroom> {
    const url = `${this.classroomByBuildingUrl}/${id}`;
    return this.http.get<Classroom>(url).pipe(
      tap(_ => this.log(`fetched Classroom id=${id}`)),
      catchError(this.handleError<Classroom>(`getClassroom id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addClassroom (Classroom): Observable<Classroom> {
    return this.http.post<Classroom>(this.classroomByBuildingUrl, Classroom, httpOptions).pipe(
      tap(_ => this.log(`added Classroom w/ id=${Classroom}`)),
      catchError(this.handleError<Classroom>('addClassroom'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteClassroom (Classroom: Classroom | number): Observable<Classroom> {
    const id = typeof Classroom === 'number' ? Classroom : Classroom.id;
    const url = `${this.classroomByBuildingUrl}/${id}`;

    return this.http.delete<Classroom>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Classroom id=${id}`)),
      catchError(this.handleError<Classroom>('deleteClassroom'))
    );
  }

  /** PUT: update the hero on the server */
  updateClassroom (Classroom: Classroom): Observable<any> {
    return this.http.put(this.classroomByBuildingUrl, Classroom, httpOptions).pipe(
      tap(_ => this.log(`updated Classroom id=${Classroom.id}`)),
      catchError(this.handleError<any>('updateClassroom'))
    );
  }


  private log(message: string) {
    this.messageService.add('ClassroomService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
