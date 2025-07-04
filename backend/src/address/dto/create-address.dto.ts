import {
  IsString,
  IsOptional,
  IsNotEmpty,
  Length,
  Matches,
} from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  street_number: string;

  @IsString()
  @IsOptional()
  complement?: string | null;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\d{8}$/, { message: 'zipCode must be exactly 8 digits' })
  zip_code: string;

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
}
