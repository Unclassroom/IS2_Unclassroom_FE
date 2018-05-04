import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'datetime-list',
  templateUrl: './datetime-list.component.html',
  styleUrls: ['./datetime-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatetimeListComponent implements OnInit {
  day : string;
  begin_hour : number;
  end_hour: number;
  @Input() datetimes;
  @Output() onCreateDatetime: EventEmitter<any> = new EventEmitter();
  @Output() onApproveAll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createDatetime() {
    let begin = String(this.begin_hour).split(":")
    let end = String(this.end_hour).split(":")
    localStorage.setItem('day', this.day);
    localStorage.setItem('begin_at_hour', begin[0]);
    localStorage.setItem('begin_at_minute', begin[1]);
    localStorage.setItem('end_at_hour',end[0] );
    localStorage.setItem('end_at_minute', end[1]);
    this.onCreateDatetime.emit({
      name: 'number'
    });
  }

  approveAll() {
    this.onApproveAll.emit();
  }
}
