import { IsInt, Min } from 'class-validator';

export class CreateSplitDto {
  @IsInt()
  id: number;

  @IsInt()
  @Min(1)
  recipientId: number;

  @IsInt()
  @Min(0)
  amount: number;

  @IsInt()
  @Min(0)
  netAmount: number;

  @IsInt()
  transactionId: number;
}
