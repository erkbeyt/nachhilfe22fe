import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TutoringService} from "../shared/tutoring-service";
import {ActivatedRoute, Router} from "@angular/router";
import {TutoringFactory} from "../shared/tutoring-factory";
import {Tutoring} from "../shared/tutoring";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../shared/authentication.service";
import {UserService} from "../shared/user-service";


@Component({
  selector: 'bs-tutoring-details',
  templateUrl: './tutoring-details.component.html',
  styles: [
  ]
})
export class TutoringDetailsComponent implements OnInit {

  tutoring : Tutoring = TutoringFactory.empty();
  bookingForm: FormGroup;

  constructor(private ts:TutoringService,
              private route:ActivatedRoute,
              private router:Router,
              private fb:FormBuilder,
              public authService:AuthenticationService,
              public us:UserService)
  {
    this.bookingForm = this.fb.group({});
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.ts.getSingle(params['id']).subscribe(t => this.tutoring = t);
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  bookTutoring(tutoringdateid:any){
    console.log("Now booking for you: "+tutoringdateid);
    const userid = this.authService.getCurrentUserId();

    for(let tutoringdate of this.tutoring.tutoringdates){
      if(tutoringdate.id == tutoringdateid){
        tutoringdate.booked=true;
        tutoringdate.user_id=userid;
      }
      console.log("USER "+tutoringdate.user_id+" booked the date "+tutoringdate.tutoringdate);
    }

    this.ts.update(this.tutoring).subscribe(res=>{
      this.router.navigate(['../../tutorings'],{
        relativeTo: this.route
      });
    });
  }

  removeTutoring(){
    if(confirm('You really wanna delete this tutoring offer?')){
      this.ts.remove(this.tutoring.id)
        .subscribe(res => this.router.navigate(['../', {relativeTo: this.route}]));
    }
  }
}
