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

  title = 'Tour of Heroes';


  onLogoutSubmit(){
    const user={}
    //Register User
    this.authService.logout();
    console.log('Logged out success');
    this.router.navigate(['/dashboard']);

  }
}
