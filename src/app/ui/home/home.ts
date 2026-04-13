import { ChangeDetectorRef, Component, inject, signal, WritableSignal } from '@angular/core';
import { GameContainer } from '../game/game-container/game-container';
import { Header } from '../header/header';
import { NgIf } from '@angular/common';
import UserService from '../../service/user.service';
import UserModel from '../../model/models/user.model';
import WordDTO from '../../model/dtos/wordDTO';
import { WebsocketService } from '../../service/websocket.service';
import { toObservable } from '@angular/core/rxjs-interop';
import { GameInfoMessage, Message } from '../../model/dtos/WebSocketMessages';
import { OpponentContainer } from "../game/opponent-container/opponent-container";

@Component({
  selector: 'app-home',
  imports: [Header, GameContainer, NgIf, OpponentContainer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly userService: UserService = inject(UserService);
  private readonly ws = inject(WebsocketService);
  words: WordDTO[] = WordDTO.emptyArray();
  wordIndex: number = 0;
  letterIndex: number = 0;
  letterToShow: string[] = ['', '', '', '', ''];
  isMultiplayer: WritableSignal<boolean> = signal(false);
  isMultiplayerSignal = toObservable(this.isMultiplayer);
  processingWebsocketMessage: boolean = false;

  opponentWords: WordDTO[] = WordDTO.emptyArray();
  opponentWordIndex: number = 0;

  constructor(private userModel: UserModel, private cd: ChangeDetectorRef) {
    this.ws.connect();
  }

  ngOnInit() {
    //this.userService.getById('1').subscribe(user => this.userModel.user = user);
    this.isMultiplayerSignal.subscribe({
      next: (multiplayer) => {
        if (multiplayer) {
          this.ws.connect();
          this.subscribeToWebSocket();
        } else {
          this.ws.close();
        }
      },
    });
  }

  subscribeToWebSocket() {
    this.ws.getMessages().subscribe({
      next: (msg) => {
        console.log('Message received:', msg);
        this.handleReceivedMessage(msg);
      },
      error: (err) => console.error('WebSocket error:', err),
      complete: () => console.log('WebSocket closed'),
    });
  }

  handleReceivedMessage(msg: any) {
    this.processingWebsocketMessage = true;
    switch (msg.type) {
      case 'game-info':
        const typedMessage = msg as GameInfoMessage;
        this.opponentWords[this.opponentWordIndex].letters = typedMessage.letters;
        this.opponentWordIndex++;
        break;
    }
    this.processingWebsocketMessage = false;
    this.cd.markForCheck();
    this.cd.detectChanges();
  }
}
