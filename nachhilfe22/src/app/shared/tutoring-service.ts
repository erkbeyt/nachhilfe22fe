import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Tutoring, User} from "./tutoring";

@Injectable({
  providedIn: 'root'
})
export class TutoringService {
  private api = 'http://nachhilfe22.s1910456009.student.kwmhgb.at/api';

  constructor(private http : HttpClient) {
  }

  getAll(): Observable<Array<Tutoring>>{
    return this.http.get<Array<Tutoring>>(`${this.api}/tutorings`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(id:number):Observable<Tutoring>{
    return this.http.get<Tutoring>(`${this.api}/tutoringbyid/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingleUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.api}/userbyid/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getUserTutoring(id:number):Observable<Array<Tutoring>>{
    return this.http.get<Tutoring>(`${this.api}/indexbyuser/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getTutoringOffers(id:number):Observable<Array<Tutoring>>{
    return this.http.get<Tutoring>(`${this.api}/indexbytutor/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(id:number):Observable<any>{
    return this.http.delete(`${this.api}/tutoring/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update(tutoring: Tutoring):Observable<any>{
    return this.http.put(`${this.api}/tutoring/${tutoring.id}`,tutoring).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(tutoring: Tutoring) : Observable<any> {
    return this.http.post(`${this.api}/tutoring`, tutoring).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any>{
    return throwError(() => new Error(error));
  }
}
