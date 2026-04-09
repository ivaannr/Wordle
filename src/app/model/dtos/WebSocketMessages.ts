import LetterDTO from './letterDTO';

export interface Message {
  type: string;
}

export interface GameInfoMessage extends Message {
  letters: LetterDTO[];
  wordToGuess: string;
}
