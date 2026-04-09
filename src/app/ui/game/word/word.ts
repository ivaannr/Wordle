import { Component, Input, SimpleChanges } from '@angular/core';
import { Letter } from "../letter/letter";
import WordDTO from '../../../model/dtos/wordDTO';
import LetterDTO from '../../../model/dtos/letterDTO';

@Component({
  selector: 'app-word',
  imports: [Letter],
  template: `
    <div class="word">
      @for (letter of word.letters; track $index) {
        <app-letter 
          [index]="$index"
          [letter]="letter"
          [wordIndex]="wordIndex"
          [wordActive]="wordActive"
          [letterIndex]="letterIndex"
          [lettersToShow]="lettersToShow"
        />
      }
    </div>
  `,
  styleUrl: './word.scss',
})
export class Word {
  @Input() word: WordDTO = new WordDTO([]);
  @Input() index: number = 0;
  @Input() wordIndex: number = 0;
  @Input() letterIndex: number = 0;
  @Input() lettersToShow: string[] = [];
  wordActive: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    this.wordActive = (this.index === this.wordIndex);
    if (this.wordActive) {
      this.replaceLetter();
    }
  }

  replaceLetter() {
    this.letterIndex--;
    this.word.letters[this.letterIndex] = new LetterDTO(this.lettersToShow[this.letterIndex], this.letterIndex, 'none');
    this.letterIndex++;
  }

  ngOnInit() {
    
  }
}
