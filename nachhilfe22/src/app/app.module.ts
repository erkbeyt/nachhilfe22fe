import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TutoringListComponent } from './tutoring-list/tutoring-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TutoringService} from "./shared/tutoring-service";
import { TutoringListItemComponent } from './tutoring-list-item/tutoring-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { TutoringDetailsComponent } from './tutoring-details/tutoring-details.component';
import { TutoringFormComponent } from './tutoring-form/tutoring-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {AuthenticationService} from "./shared/authentication.service";
import {TokenInterceptorService} from "./shared/token-interceptor.service";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StudentTutoringListComponent } from './student-tutoring-list/student-tutoring-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TutoringListComponent,
    TutoringListItemComponent,
    TutoringDetailsComponent,
    TutoringFormComponent,
    LoginComponent,
    StudentTutoringListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [TutoringService, AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
