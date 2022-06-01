import { Injectable } from '@angular/core';
import {AuthenticationService} from "./authentication.service";
import {TutoringService} from "./tutoring-service";
import {debounceTime, distinctUntilChanged} from "rxjs";
import {stringify} from "@angular/compiler/src/util";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isUserTutor:boolean=false;

  constructor(private authService: AuthenticationService, private ts:TutoringService) {
  }

  public setUserRole(id:number){
    // const userid = this.authService.getCurrentUserId();
    console.log("ID IM SETMETHODE"+id);
    let role:any=undefined;
    if(id){
      this.ts.getSingleUser(id)
        // .pipe(debounceTime(500))
        // .pipe(distinctUntilChanged())
        .subscribe(user=>{
        role = user.isTutor;
        sessionStorage.setItem('tutor',role);
        console.log("WHAT I GET:"+user.isTutor);
      });
      console.log("Role "+role);
    }
    if(role==true){
      console.log("Role im if "+role);
      // sessionStorage.setItem("tutor", "yes");
    }else{
      // sessionStorage.setItem("tutor", "no");
    }
  }
  //CHECKING IF USER IS TUTOR
  isTutorLoggedIn(){
    let val = sessionStorage.getItem('tutor');
    if(val==='1'){
      return true;
    }
    return false;
  }
}
