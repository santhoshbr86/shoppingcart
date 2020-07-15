import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;
  private user:string;
  constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<string>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    public get currentUserValue(): string {
        return this.currentUserSubject.value;
    }
    login(username: string, password: string) {
          if(username =="amigo" && password == 'delta'){
            this.user = 'Auth';         // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(this.user));
            this.currentUserSubject.next(this.user);
            return true;
          }
            
    }
    logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
}
