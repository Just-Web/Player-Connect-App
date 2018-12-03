import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

export class ChatService {
  private ip =  '3.16.119.157';
  private url = 'http://' + this.ip +':5000/';
  private socket;

  sendMessage(message, username, picture){
    this.socket.emit('add-message', {text: message, sender: username, image: picture});
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}
