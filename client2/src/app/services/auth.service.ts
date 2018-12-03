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
  registerUser(fd){
   // let headers = new Headers();
   // headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/users/register', fd)
      .pipe(map(res => res.json()));
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      .pipe(map(res => res.json()));
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .pipe(map(res => res.json()));
  }
  getAllProfiles(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/home', {headers: headers})
      .pipe(map(res => res.json()));
  }
  searchGame(searchquery){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let url = 'http://localhost:3000/users/game/' + searchquery;
    return this.http.get(url, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getUserProfile(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let url = 'http://localhost:3000/users/' + username;
    return this.http.get(url, {headers: headers})
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;

  }

  loadUser(){
    const user = localStorage.getItem('user');
    return user; //will this work?
  }

  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  // for using token : localStorage.getItem('id_token', token);
}
