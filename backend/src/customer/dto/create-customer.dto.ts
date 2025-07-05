import {
  IsInt,
  IsString,
  IsOptional,
  IsNotEmpty,
  IsEmail,
  IsDateString,
  IsIn,
} from 'class-validator';

export class CreateCustomerDto {
  @IsInt()
  id: number;

  @IsString()
  @IsOptional()
  externalRef?: string | null;

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
  documentType: string;

  @IsString()
  @IsNotEmpty()
  documentNumber: string;

  @IsDateString()
  createdAt: string;
}
