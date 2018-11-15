import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http: Http) { }

  //reach into backed URI and register user
  registerUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
      //use this while tesing on local host 3.16.119.157
      // return this.http.post('http://localhost:3000/users/register', user,{headers: headers})
      //for production 
      return this.http.post('http://3.16.119.157:3000/users/register', user,{headers: headers})
      .pipe(map(res => res.json()));
  }
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://3.16.119.157:3000/users/authenticate', user,{headers: headers})
      .pipe(map(res => res.json()));
  }
}
