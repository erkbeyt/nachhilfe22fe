import { Component, OnInit, Input } from '@angular/core';
import {Tutoring} from "../shared/tutoring";

@Component({
  selector: 'a.bs-tutoring-list-item',
  templateUrl: './tutoring-list-item.component.html',
  styles: [
  ]
})
export class TutoringListItemComponent implements OnInit {
  @Input() tutoring: Tutoring | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
