import { IWinData } from './IWinData';

export interface ILeaderboard {
  save(winData: IWinData): Promise<boolean>;
  get(mode: number): Promise<IWinData[]>
}
