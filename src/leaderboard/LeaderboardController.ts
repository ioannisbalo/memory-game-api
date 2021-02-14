import { Controller, Get, Post, Body, Inject, Query, Request } from '@nestjs/common';
import { IWinData } from '../interfaces/IWinData';
import { ILeaderboard } from '../interfaces/ILeaderboard';
import { WinDataDto } from './dto/WinDataDto';

@Controller('/leaderboard')
export class LeaderboardController {
  public constructor(@Inject('Leaderboard') private readonly leaderboard: ILeaderboard) {}

  @Get()
  public async getLeaderboard(@Query('mode') mode: string): Promise<IWinData[]> {
    return this.leaderboard.get(parseInt(mode));
  }

  @Post()
  public async save(@Body() winData: WinDataDto): Promise<boolean> {
    return this.leaderboard.save(winData as IWinData);
  }
}
