import { Module } from '@nestjs/common';
import { LeaderboardModule } from './leaderboard/LeaderboardModule';
import { GameModule } from './game/GameModule';

@Module({
  imports: [GameModule, LeaderboardModule]
})
export class AppModule {}
