import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }
  title = 'Tour of Heroes';
  onRegisterSubmit(){
    const user={}
    //Register User
    this.authService.logout().subscribe(data=>{
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
