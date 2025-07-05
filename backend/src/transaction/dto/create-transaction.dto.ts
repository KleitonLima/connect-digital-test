import {
  IsInt,
  IsString,
  IsOptional,
  IsNotEmpty,
  IsBoolean,
  IsUrl,
  IsUUID,
  IsIP,
  IsIn,
  Min,
  Max,
} from 'class-validator';

export class CreateTransactionDto {
  @IsInt()
  @Min(1)
  amount: number;

  @IsInt()
  @Min(0)
  @IsOptional()
  refunded_amount?: number;

  @IsInt()
  @Min(1)
  company_id: number;

  @IsInt()
  @Min(1)
  @Max(24)
  installments: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['credit_card', 'debit_card', 'pix', 'boleto'], {
    message: 'payment_method must be credit_card, debit_card, pix, or boleto',
  })
  payment_method: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['pending', 'paid', 'refused', 'refunded', 'cancelled'], {
    message: 'status must be pending, paid, refused, refunded, or cancelled',
  })
  status: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  postback_url?: string | null;

  @IsOptional()
  metadata?: object | null;

  @IsBoolean()
  @IsOptional()
  traceable?: boolean;

  @IsString()
  @IsUUID()
  secure_id: string;

  @IsString()
  @IsUrl()
  secure_url: string;

  @IsString()
  @IsOptional()
  paid_at?: string | null;

  @IsString()
  @IsIP()
  @IsOptional()
  ip?: string | null;

  @IsString()
  @IsOptional()
  external_ref?: string | null;
}
