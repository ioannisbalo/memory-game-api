import { IsInt, IsNotEmpty, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';

export class GetRandomNumbersDto {
  @IsNotEmpty()
  @Transform((value) => parseInt(value.value))
  @IsInt()
  @Min(1)
  @Max(50)
  public mode: number;
}