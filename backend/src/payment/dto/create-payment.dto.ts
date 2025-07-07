import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  @IsNotEmpty()
  qr_code_image_base64: string;

  @IsString()
  @IsNotEmpty()
  qr_code_copy_paste: string;
}
