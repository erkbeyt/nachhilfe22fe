import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {TutoringService} from "./tutoring-service";
import {debounceTime, distinctUntilChanged} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserTutor:boolean=false;

  constructor(private authService: AuthenticationService, private ts:TutoringService) {
    this.getUserRole();
  }

  public getUserRole(){
    const userid = this.authService.getCurrentUserId();
    if(userid){
      this.ts.getSingleUser(userid)
        .pipe(debounceTime(500))
        .pipe(distinctUntilChanged())
        .subscribe(user=>{
        this.isUserTutor = user.isTutor;
      });
    }
  }
}
