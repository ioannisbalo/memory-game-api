import { Module } from '@nestjs/common';
import { LeaderboardController } from './LeaderboardController';
import { Leaderboard } from './Leaderboard';

@Module({
  imports: [],
  controllers: [LeaderboardController],
  providers: [
    {
      provide: 'Leaderboard',
      useValue: new Leaderboard()
    }
  ],
})
export class LeaderboardModule {}
