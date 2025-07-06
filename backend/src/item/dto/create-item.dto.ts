import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsInt,
  IsBoolean,
  Min,
} from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateItemDto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @IsOptional()
  externalRef?: string | null;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @Min(0)
  unitPrice: number;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsBoolean()
  tangible: boolean;

  @IsInt()
  transactionId: number;
}
