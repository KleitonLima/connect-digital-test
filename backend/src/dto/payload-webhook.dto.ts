import {
  IsInt,
  IsString,
  IsNotEmpty,
  IsUrl,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CreateCardDto } from '../card/dto/create-card.dto';
import { CreateItemDto } from '../item/dto/create-item.dto';
import { CreateSplitDto } from '../split/dto/create-split.dto';
import { CreateFeeDto } from '../fee/dto/create-fee.dto';
import { CreateAddressDto } from '../address/dto/create-address.dto';
import { CreateTransactionDto } from '../transaction/dto/create-transaction.dto';

export class WebhookItemDto extends CreateItemDto {}

export class WebhookSplitDto extends CreateSplitDto {}

export class WebhookFeeDto extends CreateFeeDto {}

export class WebhookAddressDto extends CreateAddressDto {}

export class WebhookCardDto extends CreateCardDto {}

export class WebhookDocumentDto {
  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  type: string;
}

export class WebhookCustomerDto extends CreateCustomerDto {
  @ValidateNested()
  @Type(() => WebhookDocumentDto)
  document: WebhookDocumentDto;

  @ValidateNested()
  @Type(() => WebhookAddressDto)
  address: WebhookAddressDto;
}

export class WebhookTransactionDto extends CreateTransactionDto {
  @ValidateNested()
  @Type(() => WebhookCustomerDto)
  customer: WebhookCustomerDto;

  @ValidateNested()
  @Type(() => WebhookCardDto)
  card: WebhookCardDto;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WebhookItemDto)
  items: WebhookItemDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => WebhookSplitDto)
  splits: WebhookSplitDto[];

  @ValidateNested()
  @Type(() => WebhookFeeDto)
  fee: WebhookFeeDto;
}

export class WebhookPayloadDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  objectId: string;

  @IsString()
  @IsUrl()
  url: string;

  @ValidateNested()
  @Type(() => WebhookTransactionDto)
  data: WebhookTransactionDto;
}
