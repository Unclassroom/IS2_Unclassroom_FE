import { Component, OnInit } from '@angular/core';
import { User } from '../../_models/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  constructor() {
    
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser.id)
   }

  ngOnInit() {
  }

}
