import { ILeaderboard } from '../interfaces/ILeaderboard';
import { IWinData } from '../interfaces/IWinData';

export class Leaderboard implements ILeaderboard {
  private database: Map<number, IWinData[]> = new Map<number, IWinData[]>();

  public async save(winData: IWinData): Promise<boolean> {
    winData.date = Date.now();
    const leaderboard = await this.get(winData.mode);
    const isBestTime = leaderboard.length ? winData.milliseconds < leaderboard[0].milliseconds : true;

    leaderboard.push(winData);
    leaderboard.sort((a, b) => a.milliseconds - b.milliseconds);
    this.trimLeaderboard(leaderboard);
    this.database.set(winData.mode, leaderboard);

    return isBestTime;
  }

  private trimLeaderboard(leaderboard: IWinData[]): void {
    if (leaderboard.length > 5) {
      leaderboard.splice(5, leaderboard.length - 5);
    }
  } 

  public async get(mode: number): Promise<IWinData[]> {
    if (!this.database.has(mode)) {
      this.database.set(mode, []);
    }

    return this.database.get(mode);
  }
}