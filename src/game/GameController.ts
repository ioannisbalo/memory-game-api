import { Controller, Get, Query } from '@nestjs/common';
import { GameService } from './GameService';
import { IRandomNumbers } from '../interfaces/IRandomNumbers';
import { GetRandomNumbersDto } from './dto/GetRandomNumbersDto';

@Controller('/game')
export class GameController {
  public constructor(private readonly gameService: GameService) {}

  @Get('/numbers')
  public getNumbers(@Query() queryParams: GetRandomNumbersDto): IRandomNumbers {
    return this.gameService.getRandomNumbers(queryParams.mode);
  }
}
