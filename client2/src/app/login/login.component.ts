import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String;
  password: String;
  loading = false;
  success = true;

  constructor(
    private authService:AuthService,
    private router:Router,
    private appComponent:AppComponent) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    // create an Object
    this.success = true;
    this.loading = true;
    const user={
      username: this.username,
      password: this.password
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        console.log("Logged in");
        this.appComponent.setLoggedInUser();
        this.router.navigate(['/dashboard']);
        this.success = data.success;
      }else{
        console.log(data.msg);
        this.router.navigate(['login']);
            this.loading = false;
            this.success = data.success;
      }
    });
  }
}
