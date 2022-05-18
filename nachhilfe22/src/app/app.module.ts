import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { TutoringListComponent } from './tutoring-list/tutoring-list.component';
import {HttpClientModule} from "@angular/common/http";
import {TutoringService} from "./shared/tutoring-service";
import { TutoringListItemComponent } from './tutoring-list-item/tutoring-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { TutoringDetailsComponent } from './tutoring-details/tutoring-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TutoringListComponent,
    TutoringListItemComponent,
    TutoringDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TutoringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
