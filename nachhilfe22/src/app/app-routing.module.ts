import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {TutoringListComponent} from "./tutoring-list/tutoring-list.component";
import {TutoringDetailsComponent} from "./tutoring-details/tutoring-details.component";

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: TutoringListComponent },
  {path: 'tutorings', component: TutoringListComponent },
  {path: 'tutorings/:id', component: TutoringDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
