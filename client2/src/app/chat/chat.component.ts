import { Component, OnInit,OnDestroy } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {
  messages = [];
  user: any;
  connection;
  message;
  name;

  constructor(private chatService:ChatService, private authService:AuthService) {}

  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.name='';
    this.message = '';
  }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile =>{
      this.user=profile.user;
    },
    err=>{
      console.log(err);
      return false;
    });

    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  // Let's unsubscribe our Observable
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
