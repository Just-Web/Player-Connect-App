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
  onLogout(){
    this.authService.logout().subscribe(data=>{
      if(data.success){
        console.log('Logout success');
        this.router.navigate(['/registration']);
      } else{
        console.log('Something went wrong');
      }
    });
  }
}
