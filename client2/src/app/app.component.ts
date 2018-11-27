import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {ValidateService} from './services/validate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private validateService: ValidateService,
    private authService: AuthService,
    private router: Router
    ) { }

  title = 'Player Connect';
  // DATA MEMBER WHICH RETRIEVES LOCAL STORAGE USERNAME
  loggedInUser: string;

  ngOnInit(){
    if(this.authService.loadUser() == null){
      this.loggedInUser='Please Register or Login!';
    }
    else{
      this.setLoggedInUser();
    }
  }

  setLoggedInUser(){
    const userData=JSON.parse(this.authService.loadUser());
    this.loggedInUser=userData.username;
  }

  onLogoutSubmit(){
    const user={}
    console.log(this.authService.loadUser());
    this.authService.logout();
    console.log('Logged out success');
    this.router.navigate(['/dashboard']);
  }
}
