import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsBoolean,
  Min,
  Max,
  Length,
  IsIn,
} from 'class-validator';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  @IsIn(['visa', 'mastercard', 'amex', 'elo', 'diners', 'hipercard'], {
    message: 'brand must be a valid card brand',
  })
  brand: string;

  @IsString()
  @IsNotEmpty()
  holder_name: string;

  @IsString()
  @IsNotEmpty()
  @Length(4, 4, { message: 'last_digits must be exactly 4 digits' })
  last_digits: string;

  @IsInt()
  @Min(1)
  @Max(12)
  expiration_month: number;

  @IsInt()
  @Min(2023)
  expiration_year: number;

  @IsBoolean()
  reusable: boolean;
}
