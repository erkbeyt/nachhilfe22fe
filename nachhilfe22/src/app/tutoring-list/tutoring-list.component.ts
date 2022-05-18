import { Component, OnInit} from '@angular/core';
import {Tutoring, User, Tutoringcomment, Tutoringdate} from "../shared/tutoring";
import {TutoringService} from "../shared/tutoring-service";

@Component({
  selector: 'bs-tutoring-list',
  templateUrl: './tutoring-list.component.html',
  styles: [
  ]
})
export class TutoringListComponent implements OnInit {

  tutorings: Tutoring[] = [];

  constructor(private ts:TutoringService) { }

  ngOnInit(): void {
    this.ts.getAll().subscribe(res => this.tutorings = res);
    console.log(this.ts);
  }

}
