import { IsString, IsNotEmpty, IsUrl, IsIn, IsInt } from 'class-validator';

export class CreateWebhookDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  @IsIn(['transaction', 'payment', 'subscription', 'refund'], {
    message: 'type must be transaction, payment, subscription, or refund',
  })
  type: string;

  @IsString()
  @IsNotEmpty()
  objectId: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  url: string;
}
