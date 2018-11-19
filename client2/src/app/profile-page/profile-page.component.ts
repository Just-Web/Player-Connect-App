import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  // TEMPORARY using a string to store username grabbed from URL
  // AFTER BACKEND INTEGRATION have a User or Player data member
  username: string;

  ngOnInit() {
    // Grab username from URL and store in data member
    this.username = this.route.snapshot.paramMap.get('username');

    // Call a service which sends GET request to backend to look for user's info
    // Add error catching if user does not exist
  }

}
