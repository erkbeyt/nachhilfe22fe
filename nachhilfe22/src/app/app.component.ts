import { Component } from '@angular/core';
import {AuthenticationService} from "./shared/authentication.service";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html',
  // template: '<bs-tutoring-list></bs-tutoring-list>',
  styles: []
})
export class AppComponent {
  title = 'nachhilfe22';

  constructor(private authService: AuthenticationService) {
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  getLoginLabel(){
    return this.isLoggedIn()?"Log Out":"Log In";
  }
}
