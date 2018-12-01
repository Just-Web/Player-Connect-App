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
  searchquery: string;
  noresult: boolean;

  
  constructor( private authService:AuthService,
    private router:Router,
    private appComponent:AppComponent) { }
  
  ngOnInit() {
    // this.username = this.route.snapshot.paramMap.get('username');
    this.getAllPlayers();
    this.noresult = true;
  }
  onClickProfile(username){
    this.router.navigate(['/profile/'+username]);
  }
  onClickChat(username){
    this.router.navigate(['/chat']);
  }
  getAllPlayers(): void {
    this.authService.getAllProfiles().subscribe(data => 
      {
        this.players = data;
      });
  }
  onClickSearch(){
    console.log(this.searchquery);
    this.authService.searchGame(this.searchquery).subscribe(data => 
      {
        console.log(data.users.length);
        if(data.users.length>=1)
        {
          this.noresult = true;
          this.players = data.users;
        }
        else 
        {
          this.noresult = false;
        }
      });
  }
}
