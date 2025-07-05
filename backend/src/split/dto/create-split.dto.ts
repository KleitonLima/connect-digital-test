import { IsInt, IsNumber, Min } from 'class-validator';

export class CreateSplitDto {
  @IsInt()
  @Min(1)
  recipient_id: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  amount: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  net_amount: number;
}
