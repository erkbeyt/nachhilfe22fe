import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {TutoringFactory} from "../shared/tutoring-factory";
import {TutoringService} from "../shared/tutoring-service";
import {Tutoring, Tutoringdate} from "../shared/tutoring";
import {TutoringFormErrorMessages} from "./tutoring-form-error-messages";

@Component({
  selector: 'bs-tutoring-form',
  templateUrl: './tutoring-form.component.html',
  styles: [
  ]
})
export class TutoringFormComponent implements OnInit {

  tutoringForm : FormGroup;
  tutoring = TutoringFactory.empty();
  isUpdatingTutoring = false;
  tutoringdates: FormArray;
  errors : {[key:string]:string}={}; //Assoziatives Array


  constructor(private authService : AuthenticationService,
              private fb: FormBuilder,
              private router: Router,
              private ts:TutoringService,
              private route: ActivatedRoute,) {
    this.tutoringForm = this.fb.group({});
    this.tutoringdates = this.fb.array([]);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    if(id){
      this.isUpdatingTutoring = true;
      this.ts.getSingle(id).subscribe(tutoring=>{
        this.tutoring = tutoring;
        console.log("update");
        this.initTutoring();
      })
    }else{
      this.initTutoring();
    }
  }

  initTutoring(){
    this.buildDateArray();
    console.log("build");
    this.tutoringForm = this.fb.group({
      id: this.tutoring.id,
      subject: [this.tutoring.subject,Validators.required],
      description: [this.tutoring.description,Validators.required],
      tutoringdates: this.tutoringdates
    });

    this.tutoringForm.statusChanges.subscribe(()=>
      this.updateErrorMessages()
    );
  }

  updateErrorMessages(){
    // console.log("is invalid?"+this.tutoringForm.invalid);
    this.errors = {};
    for(const message of TutoringFormErrorMessages){
      const control = this.tutoringForm.get(message.forControl);
      if(
        control &&
        control.dirty &&
        control.invalid && control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ){
        this.errors[message.forControl] = message.text;
      }
    }
    // console.log(this.errors);
  }

  buildDateArray(){
    if(this.tutoring.tutoringdates && this.tutoring.tutoringdates.length){
      this.tutoringdates = this.fb.array([]); //Unser Form Array
      for(let date of this.tutoring.tutoringdates){
        let fg = this.fb.group({ // Einzelne Dates in FormGroup
          id: new FormControl(date.id),
          tutoringdate: new FormControl(date.tutoringdate),
          booked: new FormControl(date.booked),
          accepted: new FormControl(date.accepted),
          status: new FormControl(date.status),
        });
        this.tutoringdates.push(fg);
      }
    }
    else{
      this.addDateControl();
    }
  }

  addDateControl(){
    this.tutoringdates.push(this.fb.group({
        id: new FormControl(0),
        tutoringdate: new FormControl(""),
        booked: new FormControl(false),
        accepted: new FormControl(false),
        status: new FormControl(""),
      }
    ));
  }

  submitForm(){
    const tutoring: Tutoring = TutoringFactory.fromObject(this.tutoringForm.value);

    if(this.isUpdatingTutoring){
      this.ts.update(tutoring).subscribe(res=>{
        this.router.navigate(['../../tutorings', this.tutoring.id],{
          relativeTo: this.route
        });
      });
    }else{
      //save tutoring
      tutoring.userid = this.authService.getCurrentUserId();
      console.log("User ID: "+this.authService.getCurrentUserId());
      this.ts.create(tutoring).subscribe(res => {
        this.tutoring = TutoringFactory.empty();
        this.tutoringForm.reset(TutoringFactory.empty());
        this.router.navigate(["../tutorings"], {relativeTo: this.route});
      });
    }
  }


}
