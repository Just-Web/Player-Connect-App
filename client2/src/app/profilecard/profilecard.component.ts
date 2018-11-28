import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {AppComponent} from '../app.component';
import { Player } from '../player';
@Component({
  selector: 'app-profilecard',
  templateUrl: './profilecard.component.html',
  styleUrls: ['./profilecard.component.css']
})
export class ProfilecardComponent implements OnInit {
  @Input() players: Player;
  
  constructor( private authService:AuthService,
    private router:Router,
    private appComponent:AppComponent) { }
  
  ngOnInit() {
    // this.username = this.route.snapshot.paramMap.get('username');
    this.getAllPlayers();
    
  }

  getAllPlayers(): void {
    this.authService.getAllProfiles().subscribe(data => 
      {
        this.players = data
      });
  }
}
