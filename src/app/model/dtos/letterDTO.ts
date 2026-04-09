export default class LetterDTO {
  constructor(
    public letter: string,
    public index: number,
    public state: 'correct' | 'contains' | 'miss' | 'none',
  ) {}

  static mock() {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    return new LetterDTO(randomLetter.toUpperCase(), 0, 'miss');
  }

  static empty() {
    return new LetterDTO('', 0, 'none');
  }

  static emptyWithIndex(index: number) {
    return new LetterDTO('', index, 'none');
  }
}
