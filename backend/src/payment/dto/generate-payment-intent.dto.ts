import { IsNumber, IsPositive } from 'class-validator';

export class GeneratePaymentIntentDto {
  @IsNumber()
  @IsPositive()
  amount: number;
}
