import LetterDTO from './letterDTO';

export default class WordDTO {
  constructor(public letters: LetterDTO[]) {}

  static mock() {
    return new WordDTO(Array.from({ length: 5 }).map(() => LetterDTO.mock()));
  }

  static mockWords() {
    return Array.from({ length: 6 }).map(() => this.mock());
  }

  static empty() {
    return new WordDTO(Array.from({ length: 5 }).map((_, i) => LetterDTO.emptyWithIndex(i)));
  }

  static emptyArray() {
    return Array.from({ length: 6 }).map(() => this.empty());
  }
}
