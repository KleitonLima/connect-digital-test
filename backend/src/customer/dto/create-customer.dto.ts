import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  IsDateString,
  IsIn,
} from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  @IsOptional()
  external_ref?: string | null;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsDateString()
  @IsOptional()
  birthdate?: Date | null;

  @IsString()
  @IsNotEmpty()
  @IsIn(['cpf', 'cnpj'], { message: 'documentType must be either cpf or cnpj' })
  document_type: string;

  @IsString()
  @IsNotEmpty()
  document_number: string;
}
