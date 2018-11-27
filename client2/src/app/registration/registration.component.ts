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
  email: String;
  username: String;
  password: String;
  socialsite: String;
  game: String;
  describe: String;

  filledCorrectly: boolean;

  constructor(private validateService: ValidateService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {this.filledCorrectly = true;}
  onRegisterSubmit(){
    const user={
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      socialsite: this.socialsite,
      game: this.game,
      describe: this.describe
    }

    //Check nonrequired fields, revert to default N/A if not filled
    if(user.socialsite == undefined){user.socialsite = 'N/A';}
    if(user.game == undefined){user.game = 'N/A';}
    if(user.describe == undefined){user.describe = 'N/A';}

    //Register User
    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        this.filledCorrectly = true;
        console.log('Registered success');
        this.router.navigate(['/login']);
      } else{
        if(!this.validateService.validateRegister(user)){this.filledCorrectly = false;}
        console.log('Something went wrong');
       // this.router.navigate(['/player_registration']);
      }
    });

  }
}
