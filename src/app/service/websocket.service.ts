import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environmentDev as env } from '../enviroment/environment';
import { Injectable } from '@angular/core';
import { Message } from '../model/dtos/WebSocketMessages';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$!: WebSocketSubject<any>;

  connect() {
    this.socket$ = webSocket(env.webSocketUrl);
    console.log('Websocket connection established');
  }

  sendMessage(msg: Message) {
    this.socket$.next(msg);
    console.log('Message sent: ', msg);
  }

  getMessages() {
    return this.socket$.asObservable();
  }

  close() {
    this.socket$.complete();
  }
}
