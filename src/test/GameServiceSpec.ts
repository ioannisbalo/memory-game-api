import { GameService } from '../game/GameService';

describe('A Game Service', () => {
  const mockRandom = {
    integer: jest.fn(() => Math.floor(Math.random()*100))
  };
  const gameService = new GameService(mockRandom);

  it('should return arrays of the correct size', () => {
    const result = gameService.getRandomNumbers(3);

    expect(result.sorted.length).toEqual(3);
    expect(result.unsorted.length).toEqual(3);
  });

  it('should not return arrays with duplicates', () => {
    const simulationRuns = 20;

    for (let i = 0; i <= simulationRuns; i++) {
      const result = gameService.getRandomNumbers(3);

      expect(Array.from(new Set(result.sorted))).toEqual(result.sorted);
    }
  });

  it('should return a sorted array', () => {
    const result = gameService.getRandomNumbers(50);

    expect([...result.sorted].sort((a, b) => a - b)).toEqual(result.sorted);
  });
});
