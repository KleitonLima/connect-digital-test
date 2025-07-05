import { IsString, IsNotEmpty, IsUrl, IsIn } from 'class-validator';

export class CreateWebhookDto {
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
