import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  socialsites: String;
  games : String;
  description: String;

  constructor(private validateService: ValidateService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user={
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      socialsites: this.socialsites,
      games : this.games,
      description: this.description
    }
    //Register User
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        console.log('Registered success');
        this.router.navigate(['/dashboard']);
      } else{
        console.log('Something went wrong');
       // this.router.navigate(['/player_registration']);
      }
    });

  }
}
