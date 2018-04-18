import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService} from 'angular2-token';
import { NgRedux } from '@angular-redux/store';
/*import { AppState } from '../redux/store';
import { ISession } from '../redux/session';
import { ADD_SESSION } from '../redux/actions';
*/
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  model: any = {};
  loading = false;
  
  @Output() onFormResult = new EventEmitter<any>();

  constructor(
  //  private ngRedux: NgRedux<AppState>, 
    private tokenAuthSerivce: Angular2TokenService,
    private userService: UserService,
    private router: Router
  ) 
  {
    let passlengt= this.signUpUser.password.length;
  }
  ngOnInit() {}

  passShort(passlengt){  
    return passlengt<=8  
  }

  passLong(passlengt){ 
    if (passlengt<16)
      return false 
    else return true  
  }

  register() {
    this.loading = true;
    this.userService.create(this.model)
      .subscribe(
        data => {
          // set success message and pass true paramater to persist the message after redirecting to the login page
          this.router.navigate(['/login']);
        },
        error => {
          this.loading = false;
        });
  }
  
  onSignUpSubmit() {
    this.tokenAuthSerivce.registerAccount(this.signUpUser).subscribe(
      (res) => {
        if (res.status === 200) {
          this.onFormResult.emit({signedUp: true, res});
        }
      },
      (err) => {
        console.log(err.json())
        this.onFormResult.emit({signedUp: false, err});
      }
    );
  }
}