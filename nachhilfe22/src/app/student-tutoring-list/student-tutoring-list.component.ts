import { Component, OnInit } from '@angular/core';
import {Tutoring} from "../shared/tutoring";
import {TutoringService} from "../shared/tutoring-service";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-student-tutoring-list',
  templateUrl: './student-tutoring-list.component.html',
  styles: [
  ]
})
export class StudentTutoringListComponent implements OnInit {

  tutorings: Tutoring[] = [];

  constructor(private ts:TutoringService, private authService:AuthenticationService) {}

  ngOnInit(): void {
    const userid = this.authService.getCurrentUserId();
    this.ts.getUserTutoring(userid).subscribe(res => this.tutorings = res);
  }

}
