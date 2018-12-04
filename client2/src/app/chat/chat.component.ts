import { Component, OnInit,OnDestroy,AfterViewChecked } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  messages = [];
  user: any;
  private ip = 'localhost';
  connection;
  message;
  name;


  constructor(private chatService:ChatService, private authService:AuthService) {}

  sendMessage(){
    this.chatService.sendMessage(this.message, this.user.username, this.user.userImage);
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

  ngAfterViewChecked(){
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try{
      var myScrollContainer = document.getElementById("scrollingContainer");
      myScrollContainer.scrollTop = myScrollContainer.scrollHeight;
    } catch(err) {}
  }

  // Let's unsubscribe our Observable
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
