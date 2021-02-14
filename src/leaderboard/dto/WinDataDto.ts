import { IsInt, Min } from 'class-validator';

export class WinDataDto {
  @IsInt()
  @Min(1)
  public mode: number;
  
  @IsInt()
  @Min(0)
  public milliseconds: number;
}
