import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: String;
  password: String;
  model: any = {};
  loading = false;
  success = true;

  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }
  onAuthenticateSubmit(){
    this.loading = true;
    this.success = false;
    const user ={
      username: this.model.username,
      password: this.model.password
    }
    this.authService.authenticateUser(user).subscribe(data=>{   
        console.log(data);
        if(data.success){
          console.log('Registered success');
          this.router.navigate(['/dashboard']);
          this.success = data.success;
        } 
        else{
          console.log('Something went wrong');
          this.loading = false;
          this.success = data.success;
        }
      });
  }
}