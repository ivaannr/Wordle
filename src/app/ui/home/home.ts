import { Component, inject } from '@angular/core';
import { GameContainer } from "../game/game-container/game-container";
import { Header } from "../header/header";
import UserService from '../../service/user.service';
import UserModel from '../../model/models/user.model';
import WordDTO from '../../model/dtos/wordDTO';

@Component({
  selector: 'app-home',
  imports: [Header, GameContainer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly userService: UserService = inject(UserService);
  words: WordDTO[] = WordDTO.emptyArray();
  wordIndex: number = 0;
  letterIndex: number = 0;
  letterToShow: string[] = ['' ,'', '', '', ''];

  constructor(private userModel: UserModel) {}

  ngOnInit() {
    //this.userService.getById('1').subscribe(user => this.userModel.user = user);
  }
}