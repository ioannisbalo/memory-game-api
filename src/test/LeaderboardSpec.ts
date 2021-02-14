import { Leaderboard } from '../leaderboard/Leaderboard';

describe('A Leaderboard', () => {
  let leaderboard;
  
  beforeEach(() => {
    leaderboard = new Leaderboard();
  });

  it('should be able to save an entry for a mode', async () => {
    const winData = { mode: 4, milliseconds: 200 };

    await leaderboard.save(winData);
    const board = await leaderboard.get(4);

    expect(board.length).toEqual(1);
    expect(board[0].milliseconds).toEqual(200);
    expect(board[0].date).toBeDefined();
  });

  it('should be able to save entries for multiple modes', async () => {
    const winData1 = { mode: 4, milliseconds: 200 };
    const winData2 = { mode: 8, milliseconds: 200 };

    await leaderboard.save(winData1);
    await leaderboard.save(winData2);
    const board1 = await leaderboard.get(4);
    const board2 = await leaderboard.get(8);

    expect(board1.length).toEqual(1);
    expect(board2.length).toEqual(1);
  });

  it('should be return a leaderboard of maximum 5 items with the correct order', async () => {
    const winData1 = { mode: 4, milliseconds: 200 };
    const winData2 = { mode: 4, milliseconds: 100 };

    await leaderboard.save(winData1);
    await leaderboard.save(winData1);
    await leaderboard.save(winData1);
    await leaderboard.save(winData1);
    await leaderboard.save(winData1);
    await leaderboard.save(winData2);
    const board = await leaderboard.get(4);

    expect(board.length).toEqual(5);
    expect(board[0].milliseconds).toEqual(100);
  });
});
