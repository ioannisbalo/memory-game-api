import { Controller, Get, Query } from '@nestjs/common';
import { GameService } from './GameService';
import { IRandomNumbers } from '../interfaces/IRandomNumbers';

@Controller('/game')
export class GameController {
  public constructor(private readonly gameService: GameService) {}

  @Get('/numbers')
  public getNumbers(@Query('mode') mode: number): IRandomNumbers {
    return this.gameService.getRandomNumbers(mode);
  }
}
