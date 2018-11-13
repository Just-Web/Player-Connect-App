import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
//import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-player-registration',
  templateUrl: './player-registration.component.html',
  styleUrls: ['./player-registration.component.css']
})
export class PlayerRegistrationComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;



  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user={
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //Required Fields
    if(!this.validateService.validateRegister(user)){
      console.log('Please fill in all fields');
      return false;
    }

    //Validate Email
    if(!this.validateService.validateEmail(user.email)){
      console.log('Please use valid email');
      return false;
    }

    //Register User
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        console.log('Registered success');
      } else{
        console.log('Something went wrong');
      }
    });

  }
}
