import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../services/validate.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name: string;
  email: string;
  username: string;
  password: string;
  socialsite: string;
  game: string;
  describe: string;
  selectedFile: File = null;
  
  filledCorrectly: boolean;

  constructor(private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private http: Http) { }


    onFileSelectedListner(event){
      console.log(event);
      this.selectedFile = <File> event.target.files[0];
    }
  ngOnInit() {this.filledCorrectly = true;}
  onRegisterSubmit(){
    const fd = new FormData();
    fd.append('userImage', this.selectedFile, this.selectedFile.name );
    fd.append('name', this.name );
    fd.append('email', this.email );
    fd.append('username', this.username );
    fd.append('password', this.password );
    fd.append('socialsite', this.socialsite ); 
    fd.append('game', this.game );
    fd.append('describe', this.describe );

      //Check nonrequired fields, revert to default N/A if not filled
    if(this.socialsite == undefined){this.socialsite = 'N/A';}
    if(this.game == undefined){this.game = 'N/A';}
    if(this.describe == undefined){this.describe = 'N/A';}
    // add same for profile image

    //Register User
    this.authService.registerUser(fd).subscribe(data=>{
      if(data.success){
        this.filledCorrectly = true;
        console.log('Registered success');
        this.router.navigate(['/login']);
       } 
       else{
        this.filledCorrectly = false;
         console.log('something went wrong');
       }
    });
  }
  }
