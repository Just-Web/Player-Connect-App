import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean;
  authToken: any;
  user: any;
  private ip = '3.16.119.157';
  constructor(private http: Http) { }



  //reach into backed URI and register user
  registerUser(fd){
   // let headers = new Headers();
   // headers.append('Content-Type','application/json');
      return this.http.post('http://'+this.ip +':3000/users/register', fd)
      .pipe(map(res => res.json()));
  }

  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://'+ this.ip +':3000/users/authenticate', user,{headers: headers})
      .pipe(map(res => res.json()));
  }

  getProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://' + this.ip +':3000/users/profile', {headers: headers})
      .pipe(map(res => res.json()));
  }
  getAllProfiles(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');

    return this.http.get('http://' + this.ip + ':3000/home', {headers: headers})
      .pipe(map(res => res.json()));
  }
  searchGame(searchquery){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    let url = 'http://' + this.ip +':3000/users/game/' + searchquery;
    return this.http.get(url, {headers: headers})
      .pipe(map(res => res.json()));
  }

  getUserProfile(username){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let url = 'http://' + this.ip +':3000/users/' + username;
    return this.http.get(url, {headers: headers})
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  checkLoggedIn(){
    if(localStorage.getItem('id_token') == undefined || localStorage.getItem('id_token') == null){
      return false;
    }
    else return true;
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
