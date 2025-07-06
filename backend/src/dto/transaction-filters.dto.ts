import {
  IsOptional,
  IsString,
  IsNumber,
  IsBoolean,
  IsDate,
} from 'class-validator';

export class TransactionFiltersDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  amount?: number;

  @IsOptional()
  @IsNumber()
  refundedAmount?: number;

  @IsOptional()
  @IsNumber()
  companyId?: number;

  @IsOptional()
  @IsNumber()
  installments?: number;

  @IsOptional()
  @IsString()
  paymentMethod?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  postbackUrl?: string;

  @IsOptional()
  @IsBoolean()
  traceable?: boolean;

  @IsOptional()
  @IsString()
  secureId?: string;

  @IsOptional()
  @IsString()
  secureUrl?: string;

  @IsOptional()
  @IsString()
  ip?: string;

  @IsOptional()
  @IsString()
  externalRef?: string;

  @IsOptional()
  @IsDate()
  paidAt?: Date;

  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  @IsOptional()
  @IsString()
  customerName?: string;

  @IsOptional()
  @IsString()
  customerEmail?: string;

  @IsOptional()
  @IsString()
  customerPhone?: string;

  @IsOptional()
  @IsString()
  customerExternalRef?: string;

  @IsOptional()
  @IsDate()
  customerBirthdate?: Date;

  @IsOptional()
  @IsString()
  customerDocumentType?: string;

  @IsOptional()
  @IsString()
  customerDocumentNumber?: string;

  @IsOptional()
  @IsDate()
  customerCreatedAt?: Date;

  @IsOptional()
  @IsString()
  documentNumber?: string;

  @IsOptional()
  @IsString()
  documentType?: string;

  @IsOptional()
  @IsString()
  addressStreet?: string;

  @IsOptional()
  @IsString()
  addressStreetNumber?: string;

  @IsOptional()
  @IsString()
  addressComplement?: string;

  @IsOptional()
  @IsString()
  addressZipCode?: string;

  @IsOptional()
  @IsString()
  addressNeighborhood?: string;

  @IsOptional()
  @IsString()
  addressCity?: string;

  @IsOptional()
  @IsString()
  addressState?: string;

  @IsOptional()
  @IsString()
  addressCountry?: string;

  @IsOptional()
  @IsString()
  cardBrand?: string;

  @IsOptional()
  @IsString()
  cardHolderName?: string;

  @IsOptional()
  @IsString()
  cardLastDigits?: string;

  @IsOptional()
  @IsNumber()
  cardExpirationMonth?: number;

  @IsOptional()
  @IsNumber()
  cardExpirationYear?: number;

  @IsOptional()
  @IsBoolean()
  cardReusable?: boolean;

  @IsOptional()
  @IsDate()
  cardCreatedAt?: Date;

  @IsOptional()
  @IsString()
  itemExternalRef?: string;

  @IsOptional()
  @IsString()
  itemTitle?: string;

  @IsOptional()
  @IsNumber()
  itemUnitPrice?: number;

  @IsOptional()
  @IsNumber()
  itemQuantity?: number;

  @IsOptional()
  @IsBoolean()
  itemTangible?: boolean;

  @IsOptional()
  @IsNumber()
  splitRecipientId?: number;

  @IsOptional()
  @IsNumber()
  splitAmount?: number;

  @IsOptional()
  @IsNumber()
  splitNetAmount?: number;

  @IsOptional()
  @IsNumber()
  feeFixedAmount?: number;

  @IsOptional()
  @IsNumber()
  feeSpreadPercentage?: number;

  @IsOptional()
  @IsNumber()
  feeEstimatedFee?: number;

  @IsOptional()
  @IsNumber()
  feeNetAmount?: number;

  @IsOptional()
  @IsString()
  webhookType?: string;

  @IsOptional()
  @IsString()
  webhookObjectId?: string;

  @IsOptional()
  @IsString()
  webhookUrl?: string;

  @IsOptional()
  @IsString()
  customer?: string;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;
}
