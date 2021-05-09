import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/models/user';

@Injectable({ providedIn: 'root' })
export class AuthService {

  readonly APIUrl = "https://localhost:5001/";
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  isAuthenticated() {
    return this.http.get('/auth/isAuthenticated');
  }

  registerUser(val: any) {
    return this.http.post<any>(this.APIUrl + 'user' + '/' + 'register', val).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      if (typeof user == "string") {
        console.log(user);
        alert(user);
        return user;
      } else {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }

    }));
  }

  loginUser(val: any) {
    return this.http.post<any>(this.APIUrl + 'user' + '/' + 'login', val).pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      if (typeof user == "string") {
        console.log(user);
        alert(user);
        return user;
      } else {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }

    }));
  }

  logoutUser() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
