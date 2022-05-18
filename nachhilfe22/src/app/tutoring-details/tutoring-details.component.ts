import { Component, OnInit } from '@angular/core';
import {TutoringService} from "../shared/tutoring-service";
import {ActivatedRoute, Router} from "@angular/router";
import {TutoringFactory} from "../shared/tutoring-factory";
import {Tutoring} from "../shared/tutoring";

@Component({
  selector: 'bs-tutoring-details',
  templateUrl: './tutoring-details.component.html',
  styles: [
  ]
})
export class TutoringDetailsComponent implements OnInit {
  tutoring : Tutoring = TutoringFactory.empty();

  constructor(private ts:TutoringService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    this.ts.getSingle(params['id']).subscribe(t => this.tutoring = t);
  }

}
