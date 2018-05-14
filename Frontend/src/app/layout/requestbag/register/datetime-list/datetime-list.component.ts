import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl,
  FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'datetime-list',
  templateUrl: './datetime-list.component.html',
  styleUrls: ['./datetime-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatetimeListComponent implements OnInit {
  myForm: FormGroup;
  day : string;
  begin_hour : number;
  end_hour: number;
  @Input() datetimes;
  @Output() onCreateDatetime: EventEmitter<any> = new EventEmitter();
  @Output() onApproveAll: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { 
    
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      items: this.fb.array(
        [
          this.buildItem('aaa'), 
          this.buildItem('')
        ],
        ItemsValidator.minQuantitySum(300)
      )
    })
  }

  submit() {
    console.log("Reactive Form submitted: ", this.myForm)
  }

  buildItem(val: string) {
    
    return new FormGroup({
      day: new FormControl(val, Validators.required),
      begin_time: new FormControl(10),
      end_time: new FormControl(12)
    })
  }

  createDatetime() {
    console.log(JSON.parse(this.myForm.value))
    localStorage.setItem('Form', this.myForm.value);
    let firstbegin_time = JSON.parse(localStorage.getItem("Form"))
    console.log(firstbegin_time[1])
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
class ItemsValidator 
{
  static minQuantitySum(val: number) 
  {
    return (c: AbstractControl) => 
    {
      let sum = c.value
        .map(item => item.begin_time)
        .reduce((acc, cur) => acc + cur, 0 );
        if (sum < val) {
          return { minSum: val }
        }
    }
  }
}