import { IsInt, Min, Max } from 'class-validator';

export class CreateFeeDto {
  @IsInt()
  @Min(0)
  fixedAmount: number;

  @IsInt()
  @Min(0)
  @Max(100)
  spreadPercentage: number;

  @IsInt()
  @Min(0)
  estimatedFee: number;

  @IsInt()
  @Min(0)
  netAmount: number;
}
