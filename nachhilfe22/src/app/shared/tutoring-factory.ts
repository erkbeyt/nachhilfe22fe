import {Tutoring, Tutoringdate} from "./tutoring";

export class TutoringFactory {

  static empty():Tutoring{
    return new Tutoring(0,'','', 0,
      [{id:0, tutoringdate:new Date(), accepted:false, booked:false, status:''}],
      // [{id:0, firstName:'', lastName:'', email:'', isTutor:true, study:''}],
      []
    );
  }

  static fromObject(rawTutoring:any):Tutoring{
    return new Tutoring(
      rawTutoring.id,
      rawTutoring.subject,
      rawTutoring.description,
      rawTutoring.userid,
      rawTutoring.tutoringdates,
      rawTutoring.tutoringcomments
    );
  }
}
