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
  refunded_amount?: number;

  @IsOptional()
  @IsNumber()
  company_id?: number;

  @IsOptional()
  @IsNumber()
  installments?: number;

  @IsOptional()
  @IsString()
  payment_method?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  postback_url?: string;

  @IsOptional()
  @IsBoolean()
  traceable?: boolean;

  @IsOptional()
  @IsString()
  secure_id?: string;

  @IsOptional()
  @IsString()
  secure_url?: string;

  @IsOptional()
  @IsString()
  ip?: string;

  @IsOptional()
  @IsString()
  external_ref?: string;

  @IsOptional()
  @IsDate()
  paid_at?: Date;

  @IsOptional()
  @IsDate()
  created_at?: Date;

  @IsOptional()
  @IsDate()
  updated_at?: Date;

  @IsOptional()
  @IsString()
  customer_name?: string;

  @IsOptional()
  @IsString()
  customer_email?: string;

  @IsOptional()
  @IsString()
  customer_phone?: string;

  @IsOptional()
  @IsString()
  customer_external_ref?: string;

  @IsOptional()
  @IsDate()
  customer_birthdate?: Date;

  @IsOptional()
  @IsString()
  customer_document_type?: string;

  @IsOptional()
  @IsString()
  customer_document_number?: string;

  @IsOptional()
  @IsDate()
  customer_created_at?: Date;

  @IsOptional()
  @IsString()
  document_number?: string;

  @IsOptional()
  @IsString()
  document_type?: string;

  @IsOptional()
  @IsString()
  address_street?: string;

  @IsOptional()
  @IsString()
  address_street_number?: string;

  @IsOptional()
  @IsString()
  address_complement?: string;

  @IsOptional()
  @IsString()
  address_zip_code?: string;

  @IsOptional()
  @IsString()
  address_neighborhood?: string;

  @IsOptional()
  @IsString()
  address_city?: string;

  @IsOptional()
  @IsString()
  address_state?: string;

  @IsOptional()
  @IsString()
  address_country?: string;

  @IsOptional()
  @IsString()
  card_brand?: string;

  @IsOptional()
  @IsString()
  card_holder_name?: string;

  @IsOptional()
  @IsString()
  card_last_digits?: string;

  @IsOptional()
  @IsNumber()
  card_expiration_month?: number;

  @IsOptional()
  @IsNumber()
  card_expiration_year?: number;

  @IsOptional()
  @IsBoolean()
  card_reusable?: boolean;

  @IsOptional()
  @IsDate()
  card_created_at?: Date;

  @IsOptional()
  @IsString()
  item_external_ref?: string;

  @IsOptional()
  @IsString()
  item_title?: string;

  @IsOptional()
  @IsNumber()
  item_unit_price?: number;

  @IsOptional()
  @IsNumber()
  item_quantity?: number;

  @IsOptional()
  @IsBoolean()
  item_tangible?: boolean;

  @IsOptional()
  @IsNumber()
  split_recipient_id?: number;

  @IsOptional()
  @IsNumber()
  split_amount?: number;

  @IsOptional()
  @IsNumber()
  split_net_amount?: number;

  @IsOptional()
  @IsNumber()
  fee_fixed_amount?: number;

  @IsOptional()
  @IsNumber()
  fee_spread_percentage?: number;

  @IsOptional()
  @IsNumber()
  fee_estimated_fee?: number;

  @IsOptional()
  @IsNumber()
  fee_net_amount?: number;

  @IsOptional()
  @IsString()
  webhook_type?: string;

  @IsOptional()
  @IsString()
  webhook_object_id?: string;

  @IsOptional()
  @IsString()
  webhook_url?: string;

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
