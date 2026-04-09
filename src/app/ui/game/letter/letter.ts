import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import LetterDTO from '../../../model/dtos/letterDTO';

@Component({
  selector: 'app-letter',
  imports: [NgClass],
  template: `
    <div [ngClass]="{ letter: true, selected: letterActive }" class="{{ getState() }}">
      @if (wordActive) {
        <p>{{ lettersToShow[index] }}</p>
      } @else {
        <p>{{ letter?.letter ?? '' }}</p>
      }
    </div>
  `,
  styleUrl: './letter.scss',
})
export class Letter {
  @Input({ required: true }) letter?: LetterDTO;
  @Input() lettersToShow: string[] = [];
  @Input() letterIndex: number = 0;
  @Input() wordActive: boolean = false;
  @Input() wordIndex: number = 0;
  @Input() index: number = 0;
  letterActive: boolean = false;

  ngOnChanges() {
    this.letterActive = (this.index === this.letterIndex && this.wordActive);
  }

  getState() {
    return this.letter?.state;
  }
}