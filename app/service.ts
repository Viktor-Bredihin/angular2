import { Injectable } from 'angular2/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';

@Injectable()
export class LoggedService {
  private subject: Subject<string> = new Subject<string>();

  constructor() {
      this.getLogged().subscribe(data => {
        console.log('service got new value');
      })
  }

  setLogged(logged: string): void {
    this.subject.next(logged);
  }
  
  getLogged(): Observable<string> {
    return this.subject.asObservable().share();
  }
}
