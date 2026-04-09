import { ChangeDetectorRef, Component, HostListener, inject, Input } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Word } from '../word/word';
import WordToGuessModel from '../../../model/models/wordToGuess.model';
import UtilsService from '../../../service/utils.service';
import WordDTO from '../../../model/dtos/wordDTO';
import { DictionaryService } from '../../../service/dictionary.service';
import { WebsocketService } from '../../../service/websocket.service';
import { GameInfoMessage } from '../../../model/dtos/WebSocketMessages';

@Component({
  selector: 'app-game-container',
  imports: [Word, ToastModule],
  templateUrl: './game-container.html',
  styleUrl: './game-container.scss',
  providers: [MessageService],
})
export class GameContainer {
  @Input() words: WordDTO[] = WordDTO.mockWords();
  @Input() wordIndex: number = 0;
  @Input() letterIndex: number = 0;
  @Input() lettersToShow: string[] = [];
  @Input() isOpponent: boolean = false;
  private readonly dictionaryService = inject(DictionaryService);
  private readonly messageService = inject(MessageService);
  private readonly utils = inject(UtilsService);
  private readonly ws = inject(WebsocketService);
  submitDisabled: boolean = false;
  keysEnabled: boolean = true;
  userWon: boolean = false;

  constructor(
    private wordModel: WordToGuessModel,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.utils.fetchRandomWord().subscribe((word) => {
      this.wordModel.word = word;
      console.log(word);
    });
  }

  showMessage(
    severity: string = 'info',
    summary: string = 'Warn',
    detail: string = 'Message Content',
    key: string = 'default',
  ) {
    this.messageService.add({ severity, summary, detail, key });
  }

  updateGameStatus() {
    const currentGuess = this.lettersToShow.join('').toUpperCase();
    const targetWord = this.wordModel.word.toUpperCase();

    if (currentGuess === targetWord) {
      this.userWon = true;
    }
  }

  allEmpty() {
    return this.lettersToShow.every((letter) => letter === '');
  }

  @HostListener('document:keydown', ['$event'])
  handleKeys(event: KeyboardEvent) {
    if (!this.keysEnabled) {
      return;
    }

    const letters = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'ñ',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ].map((letter) => letter.toUpperCase());

    const key = event.key.toUpperCase();

    switch (key) {
      case 'BACKSPACE':
        if (this.letterIndex < 1) {
          return;
        }

        this.letterIndex--;
        this.lettersToShow[this.letterIndex] = '';

        break;
      case 'ENTER':
        const targetWord = this.wordModel.word.toUpperCase();
        if (this.wordIndex >= 6 || this.letterIndex !== 5) return;

        const currentGuess = [...this.lettersToShow];
        const target = this.wordModel.word.toUpperCase();

        const checkedWord = this.utils.checkWord(target, currentGuess);

        this.words[this.wordIndex] = checkedWord;
        this.words = [...this.words];

        this.ws.sendMessage({
          type: 'game-info',
          letters: checkedWord.letters,
          wordToGuess: this.wordModel.word,
        } as GameInfoMessage);

        this.updateGameStatus();

        this.wordIndex++;
        this.letterIndex = 0;
        this.lettersToShow = [];

        if (this.userWon) {
          this.showMessage(
            'success',
            'Ganaste',
            `Acertaste! La palabra era '${targetWord}'`,
            'mid',
          );
          this.keysEnabled = false;
          return;
        }

        if (this.wordIndex === 6) {
          this.showMessage(
            'error',
            'Perdiste',
            `No has ganado! La palabra era '${targetWord}'`,
            'mid',
          );
          this.keysEnabled = false;
          return;
        }

        this.cd.detectChanges();
        break;
      default:
        if (!letters.includes(key)) {
          return;
        }

        if (this.letterIndex > 4) {
          return;
        }

        this.lettersToShow[this.letterIndex] = key;
        this.letterIndex++;
        break;
    }
  }
}
