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


  constructor(private authService: AuthenticationService, public us:UserService) {
  }

  isLoggedIn(){
      return this.authService.isLoggedIn();
  }

  //CHECKING IF USER IS TUTOR
  isTutorLoggedIn(){
    let val = sessionStorage.getItem('tutor');
    if(val==='1'){
      return true;
    }
    return false;
  }

  getLoginLabel(){
    return this.isLoggedIn()?"Log Out":"Log In";
  }
}
