import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsInt,
  Length,
  Matches,
} from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  streetNumber: string;

  @IsString()
  @IsOptional()
  complement?: string | null;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{8}$/, { message: 'zipCode must be exactly 8 digits' })
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 2, { message: 'state must be exactly 2 characters' })
  state: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 2, { message: 'country must be exactly 2 characters' })
  country: string;

  @IsInt()
  customerId: number;
}
