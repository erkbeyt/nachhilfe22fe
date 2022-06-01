export class Tutoringdate {
  constructor(public id:number,
              public tutoringdate:Date,
              public booked:boolean,
              public accepted:boolean,
              public user_id?:number,
              public status?:string,
              ) {}
}
