import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export default class WordToGuessModel {
    public word: string = '';
}