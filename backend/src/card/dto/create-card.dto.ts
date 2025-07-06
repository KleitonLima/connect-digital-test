import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsBoolean,
  IsDateString,
  IsOptional,
  Min,
  Max,
  Length,
  IsIn,
} from 'class-validator';

export class CreateCardDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['visa', 'mastercard', 'amex', 'elo', 'diners', 'hipercard'], {
    message: 'brand must be a valid card brand',
  })
  brand: string;

  @IsString()
  @IsNotEmpty()
  holderName: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 4, { message: 'lastDigits must be exactly 4 digits' })
  lastDigits: string;

  @IsInt()
  @Min(1)
  @Max(12)
  expirationMonth: number;

  @IsInt()
  @Min(2023)
  expirationYear: number;

  @IsBoolean()
  reusable: boolean;

  @IsDateString()
  @IsOptional()
  createdAt?: string;
}
