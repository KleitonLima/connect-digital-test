import { IsInt } from 'class-validator';

export class GeneratePaymentIntentDto {
  @IsInt()
  amount: number;
}
