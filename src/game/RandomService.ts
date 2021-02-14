import { IRandom } from '../interfaces/IRandom';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RandomService implements IRandom {
  public integer(start: number, end: number): number {
    const random = Math.random();
    const randomBetween = (random * end) + start

    return Math.floor(randomBetween);
  }
}
