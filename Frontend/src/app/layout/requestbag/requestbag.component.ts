import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';
import {  User } from '../../_models/index';

@Component({
  selector: 'app-requestbag',
  templateUrl: './requestbag.component.html',
  styleUrls: ['./requestbag.component.css']
})
export class RequestbagComponent implements OnInit {
  requests:any ={}
  currentUser: User
  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.getRequestByUser();
    
  }

  getRequestByUser(): void {
    this.requestService.getRequestByUser(this.currentUser.id)
      .subscribe(
        response => 
        {
          // localStorage.setItem("id_request", requests.id);
          console.log(response[0].id)
          console.log(response[0].type_classroom)
          console.log(response)
          this.requests = response
        },
        errors=>{

        }
      );
  }

}
