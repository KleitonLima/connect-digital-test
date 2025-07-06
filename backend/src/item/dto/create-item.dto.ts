import { IsString, IsOptional, IsInt, IsBoolean, Min } from 'class-validator';

export class CreateItemDto {
  @IsOptional()
  @IsString()
  externalRef?: string | null;

  @IsString()
  title: string;

  @IsInt()
  @Min(0)
  unitPrice: number;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsBoolean()
  tangible: boolean;

  @IsOptional()
  @IsInt()
  transactionId?: number;
}
