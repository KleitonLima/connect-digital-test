import {
  IsInt,
  IsString,
  IsOptional,
  IsNotEmpty,
  IsBoolean,
  IsUrl,
  IsUUID,
  IsIP,
  IsDateString,
  IsIn,
  Min,
  Max,
} from 'class-validator';

export class CreateTransactionDto {
  @IsInt()
  id: number;

  @IsInt()
  @Min(1)
  amount: number;

  @IsInt()
  @Min(0)
  refundedAmount: number;

  @IsInt()
  @Min(1)
  companyId: number;

  @IsInt()
  @Min(1)
  @Max(24)
  installments: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['credit_card', 'debit_card', 'pix', 'boleto'], {
    message: 'paymentMethod must be credit_card, debit_card, pix, or boleto',
  })
  paymentMethod: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['pending', 'paid', 'refused', 'refunded', 'cancelled'], {
    message: 'status must be pending, paid, refused, refunded, or cancelled',
  })
  status: string;

  @IsString()
  @IsUrl()
  @IsOptional()
  postbackUrl?: string | null;

  @IsOptional()
  metadata?: Record<string, any> | null;

  @IsBoolean()
  traceable: boolean;

  @IsString()
  @IsUUID()
  secureId: string;

  @IsString()
  @IsUrl()
  secureUrl: string;

  @IsString()
  @IsOptional()
  paidAt?: string | null;

  @IsString()
  @IsIP()
  @IsOptional()
  ip?: string | null;

  @IsString()
  @IsOptional()
  externalRef?: string | null;

  @IsDateString()
  createdAt: string;

  @IsDateString()
  updatedAt: string;
}
