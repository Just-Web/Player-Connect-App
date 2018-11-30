import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  @Input() user: Player;
  //user:Object;
  constructor(
    private route: ActivatedRoute,
    private validateService: ValidateService,
      private authService: AuthService,
      private router: Router
  ) { }
  // TEMPORARY using a string to store username grabbed from URL
  // AFTER BACKEND INTEGRATION have a User or Player data member
  username: string;

  ngOnInit() {
    // Grab username from URL and store in data member
    this.username = this.route.snapshot.paramMap.get('username');

    if(!this.username){
    this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;
    },
    err=>{
      console.log(err);
      return false;
    });
} else {
    this.authService.getUserProfile(this.username).subscribe(profile=>{
      this.user=profile.user;
    },
    err=>{
      console.log(err);
      return false;
    });
}
    // Call a service which sends GET request to backend to look for user's info
    // Add error catching if user does not exist
  }

}
