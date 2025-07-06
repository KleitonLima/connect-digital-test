import {
  IsInt,
  IsString,
  IsOptional,
  IsEmail,
  IsDateString,
  IsIn,
} from 'class-validator';

export class CreateCustomerDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  externalRef?: string | null;

  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsDateString()
  birthdate?: Date | null;

  @IsOptional()
  @IsString()
  @IsIn(['cpf', 'cnpj'], { message: 'documentType must be either cpf or cnpj' })
  documentType?: string;

  @IsOptional()
  @IsString()
  documentNumber?: string;

  @IsDateString()
  createdAt: string;
}
