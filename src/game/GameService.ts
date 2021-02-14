import { Injectable, Inject } from '@nestjs/common';
import { IRandomNumbers } from '../interfaces/IRandomNumbers';
import { IRandom } from '../interfaces/IRandom';

@Injectable()
export class GameService {
  public constructor(
    @Inject('Random') private readonly randomService: IRandom
  ) {}

  public getRandomNumbers(amount: number): IRandomNumbers {
    const randomNumbers = [];
    const checkTable: {[key: number]: boolean} = {};

    for (let i = 0; i < amount; i++) {
      randomNumbers.push(this.getNewRandomNumber(checkTable));
    }

    const unsorted = [...randomNumbers];
    const sorted = randomNumbers.sort((a, b) => a - b);

    return { unsorted, sorted };
  }

  private getNewRandomNumber(checkTable: {[key: number]: boolean}): number {
    let random = this.randomService.integer(0, 100);

    if (checkTable[random] && Object.keys(checkTable).length < 100) {
      random = this.getNewRandomNumber(checkTable);
    }

    checkTable[random] = true;

    return random;
  }
}
