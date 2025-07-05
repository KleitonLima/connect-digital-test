import { IsInt, Min, Max } from 'class-validator';

export class CreateFeeDto {
  @IsInt()
  @Min(0)
  fixed_amount: number;

  @IsInt()
  @Min(0)
  @Max(100)
  spread_percentage: number;

  @IsInt()
  @Min(0)
  estimated_fee: number;

  @IsInt()
  @Min(0)
  net_amount: number;
}
