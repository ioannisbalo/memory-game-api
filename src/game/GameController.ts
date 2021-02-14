import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { GameService } from './GameService';
import { IRandomNumbers } from '../interfaces/IRandomNumbers';
import { IWinData } from '../interfaces/IWinData';

@Controller('/game')
export class GameController {
  public constructor(private readonly gameService: GameService) {}

  @Get('/numbers')
  public getNumbers(@Query('mode') mode: number): IRandomNumbers {
    return this.gameService.getRandomNumbers(mode);
  }
}
