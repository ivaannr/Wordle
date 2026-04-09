import { catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import LetterDTO from '../model/dtos/letterDTO';
import WordDTO from '../model/dtos/wordDTO';

@Injectable({ providedIn: 'root' })
export default class UtilsService {
  constructor(private http: HttpClient) {}

  /**
   * Fetches a random word which has to be guessed by the user
   */
  public fetchRandomWord(lang: string = 'es', length: number = 5) {
    return this.http
      .get<string>(`https://random-word-api.herokuapp.com/word?length=${length}&lang=${lang}`)
      .pipe(
        catchError((err) => {
          console.log('An error ocurred while fetching:', err);
          return of([]);
        }),
        map((word) => word[0] as string),
      );
  }

  /**
   * Compares two words and retrives a LetterDTO object
   */
  public checkWord(wordToGuess: string, givenWord: string[]): WordDTO {
    const targetArray = wordToGuess.toUpperCase().split('');
    const result: LetterDTO[] = new Array(5);
    const letterCount: Record<string, number> = {};

    for (const char of targetArray) {
      letterCount[char] = (letterCount[char] ?? 0) + 1;
    }

    for (let i = 0; i < 5; i++) {
      const letter = givenWord[i];
      if (letter === targetArray[i]) {
        result[i] = new LetterDTO(letter, i, 'correct');
        letterCount[letter]--;
      }
    }

    for (let i = 0; i < 5; i++) {
      if (result[i]) continue;
      const letter = givenWord[i];
      if (letterCount[letter] > 0) {
        result[i] = new LetterDTO(letter, i, 'contains');
        letterCount[letter]--;
      } else {
        result[i] = new LetterDTO(letter, i, 'miss');
      }
    }

    return new WordDTO(result);
  }
}
