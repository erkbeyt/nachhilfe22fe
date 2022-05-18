import {Tutoringdate} from "./tutoringdate";
export {Tutoringdate} from "./tutoringdate";
import {Tutoringcomment} from "./tutoringcomment";
export {Tutoringcomment} from "./tutoringcomment";
import {User} from "./user";
export {User} from "./user";

export class Tutoring {
  constructor(public id:number,
              public subject:string,
              public description:string,
              public tutoringdates:Tutoringdate[],
              public user:User[], //evtl nur ein User? noch unsicher
              public tutoringcomments?:Tutoringcomment[]) {}
}
