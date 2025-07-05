import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsInt,
  IsBoolean,
  Min,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsOptional()
  external_ref?: string | null;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsInt()
  @Min(0)
  unit_price: number;

  @IsInt()
  @Min(1)
  quantity: number;

  @IsBoolean()
  tangible: boolean;
}
