import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import * as QRCode from 'qrcode';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { GeneratePaymentIntentDto } from './dto/generate-payment-intent.dto';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const { qr_code_image_base64, qr_code_copy_paste } = createPaymentDto;

    const payment = this.paymentRepository.create({
      qr_code_image_base64,
      qr_code_copy_paste,
    });

    await this.paymentRepository.save(payment);
  }

  async generatePaymentIntentPix(
    generatePaymentIntentDto: GeneratePaymentIntentDto,
  ): Promise<unknown> {
    const { amount } = generatePaymentIntentDto;
    try {
      const qrCodeBase64 = await QRCode.toDataURL(amount.toString(), {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        width: 256,
      });

      const qrCodeAscii = await QRCode.toString(amount.toString(), {
        type: 'terminal',
        small: true,
      });

      const generatedQrCodes = {
        qr_code_image_base64: qrCodeBase64,
        qr_code_copy_paste: qrCodeAscii,
      };

      this.create(generatedQrCodes);

      return generatedQrCodes;
    } catch (error) {
      throw new Error(`Failed to generate QR codes: ${error.message}`);
    }
  }
}
