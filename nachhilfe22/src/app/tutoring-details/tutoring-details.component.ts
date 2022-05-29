import { Component, OnInit } from '@angular/core';
import {TutoringService} from "../shared/tutoring-service";
import {ActivatedRoute, Router} from "@angular/router";
import {TutoringFactory} from "../shared/tutoring-factory";
import {Tutoring} from "../shared/tutoring";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../shared/authentication.service";


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
              public authService:AuthenticationService)
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

  bookTutoring(){
  }

  removeTutoring(){
    if(confirm('You really wanna delete this tutoring offer?')){
      this.ts.remove(this.tutoring.id)
        .subscribe(res => this.router.navigate(['../', {relativeTo: this.route}]));
    }
  }
}
