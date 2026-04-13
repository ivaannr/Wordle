import { ChangeDetectorRef, Component, Input, SimpleChanges } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Toast } from "primeng/toast";
import { Word } from "../word/word";
import WordDTO from '../../../model/dtos/wordDTO';

@Component({
  selector: 'app-opponent-container',
  imports: [Word, Toast],
  templateUrl: './opponent-container.html',
  styleUrl: './opponent-container.scss',
  providers: [MessageService]
})
export class OpponentContainer {
  @Input() words: WordDTO[] = [];
  @Input() wordIndex: number = 0;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.cd.markForCheck();
    this.cd.detectChanges();
  }

}
