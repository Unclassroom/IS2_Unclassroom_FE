import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'datetime-list',
  templateUrl: './datetime-list.component.html',
  styleUrls: ['./datetime-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatetimeListComponent implements OnInit {
  @Input() datetimes;
  @Output() onCreateDatetime: EventEmitter<any> = new EventEmitter();
  @Output() onApproveAll: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createDatetime() {
    this.onCreateDatetime.emit({
      name: 'number'
    });
  }

  approveAll() {
    this.onApproveAll.emit();
  }
}
