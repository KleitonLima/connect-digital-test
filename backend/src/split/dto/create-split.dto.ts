import { IsInt, Min } from 'class-validator';

export class CreateSplitDto {
  @IsInt()
  @Min(1)
  recipient_id: number;

  @IsInt()
  @Min(0)
  amount: number;

  @IsInt()
  @Min(0)
  net_amount: number;
}
