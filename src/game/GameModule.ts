import { Module } from '@nestjs/common';
import { GameController } from './GameController';
import { GameService } from './GameService';
import { RandomService } from './RandomService';
import { Leaderboard } from '../leaderboard/Leaderboard';

@Module({
  imports: [],
  controllers: [GameController],
  providers: [
    GameService,
    {
      provide: 'Random',
      useClass: RandomService
    },
    {
      provide: 'Leaderboard',
      useClass: Leaderboard
    }
  ]
})
export class GameModule {}
