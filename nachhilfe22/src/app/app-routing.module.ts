import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {TutoringListComponent} from "./tutoring-list/tutoring-list.component";
import {TutoringDetailsComponent} from "./tutoring-details/tutoring-details.component";
import {LoginComponent} from "./login/login.component";
import {CanNavigateToAdminGuard} from "./can-navigate-to-admin.guard";
import {TutoringFormComponent} from "./tutoring-form/tutoring-form.component";

const routes: Routes = [
  {path:'', redirectTo:'tutorings', pathMatch:'full'},
  // {path: 'home', component: TutoringListComponent },
  {path: 'tutorings', component: TutoringListComponent},
  {path: 'tutorings/:id', component: TutoringDetailsComponent},
  {path: 'admin', component: TutoringFormComponent, canActivate: [CanNavigateToAdminGuard] },
  {path:'admin/:id', component: TutoringFormComponent, canActivate: [CanNavigateToAdminGuard]},
  {path: 'login', component: LoginComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanNavigateToAdminGuard]
})
export class AppRoutingModule { }
