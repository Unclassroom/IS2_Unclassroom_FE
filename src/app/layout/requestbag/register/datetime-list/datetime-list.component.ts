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
      specific: this.fb.array(
        [
          this.buildItem('0'), 
          this.buildItem('0')
        ],
        ItemsValidator.minQuantitySum(300)
      )
    })
  }

  submit() {
    console.log("Reactive Form submitted: ", this.myForm)

  }

  test(){
    let first_array = this.myForm.value
    localStorage.setItem("schedule_options", JSON.stringify(first_array));
    console.log(first_array)
  }

  buildItem(val: string) {
    
    return new FormGroup({
      date: new FormControl(val, Validators.required),
      begin_at_hour: new FormControl(0),
      begin_at_minute: new FormControl(0),
      end_at_hour: new FormControl(0),
      end_at_minute: new FormControl(0)
    })
  }

  createDatetime() {
    // console.log(JSON.parse(this.myForm.value))
    // localStorage.setItem('Form', this.myForm.value);
    // let firstbegin_time = JSON.parse(localStorage.getItem("Form"))
    // console.log(firstbegin_time[1])
    let begin = String(this.begin_hour).split(":")
    let end = String(this.end_hour).split(":")
    localStorage.setItem('day', this.day);
    localStorage.setItem('begin_at_minute', begin[1]);
    localStorage.setItem('begin_at_hour', begin[0]);
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
        .map(item => item.begin_at_hour)
        .reduce((acc, cur) => acc + cur, 0 );
        if (sum < val) {
          return { minSum: val }
        }
    }
  }
}