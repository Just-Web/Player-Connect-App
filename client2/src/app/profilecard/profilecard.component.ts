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
  ip :string ;


  constructor( private authService:AuthService,
    private router:Router,
    private appComponent:AppComponent) { }

  ngOnInit() {
    // this.username = this.route.snapshot.paramMap.get('username');
    this.getAllPlayers();
    this.noresult = true;
    this.ip = '3.16.119.157';
  }
  onClickProfile(username){
    this.router.navigate(['/profile/'+username]);
  }
  onClickChat(username, event){
    event.stopPropagation();
    var obj = document.getElementById('chatDropdownMenuButton');
    obj.click();
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
