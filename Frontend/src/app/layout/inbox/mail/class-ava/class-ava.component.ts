import { Component, OnInit } from '@angular/core';
// Models
import { InboxRequest} from '../../../models/inboxrequest';

@Component({
  selector: 'app-class-ava',
  templateUrl: './class-ava.component.html',
  styleUrls: ['./class-ava.component.css']
})
export class ClassAvaComponent implements OnInit {
  class_ava: any = {}
  specific_schedule:any={}
  cyclic_schedule:any={}
  request_mail: InboxRequest;

  constructor(
  ) { }

  ngOnInit() 
  {
    this.class_ava = JSON.parse(localStorage.getItem("class_ava"))
    this.specific_schedule = JSON.parse(localStorage.getItem("specific_schedule"))
    this.request_mail = JSON.parse(localStorage.getItem("request_mail"))
    console.log(this.class_ava)
    console.log(this.specific_schedule)
    console.log(this.request_mail)
  }

}
