import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";
import {TutoringService} from "./shared/tutoring-service";
import {UserService} from "./shared/user-service";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  // template: '<bs-tutoring-list></bs-tutoring-list>',
  styles: []
})
export class AppComponent {
  title = 'nachhilfe22';


  constructor(private authService: AuthenticationService, private us:UserService) {
  }

  isTutorLoggedIn(){
    if(this.us.isUserTutor && this.authService.isLoggedIn()){
      return true;
    }else
    return false;
  }

  isLoggedIn(){
      return this.authService.isLoggedIn();
  }

  getLoginLabel(){
    return this.isLoggedIn()?"Log Out":"Log In";
  }
}
