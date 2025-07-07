import { IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  qr_code_image_base64: string;

  @IsString()
  qr_code_copy_paste: string;
}
