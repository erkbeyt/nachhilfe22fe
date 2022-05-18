export class Tutoringdate {
  constructor(public id:number,
              public tutoringdate:Date,
              public booked:boolean,
              public accepted:boolean,
              public status?:string) {}
}
