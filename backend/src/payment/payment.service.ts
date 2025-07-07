import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import * as QRCode from 'qrcode';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { GeneratePaymentIntentDto } from './dto/generate-payment-intent.dto';
import { gerarPayloadPix } from './utils/pix-payload.util';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    try {
      const { qr_code_image_base64, qr_code_copy_paste } = createPaymentDto;

      const payment = this.paymentRepository.create({
        qr_code_image_base64,
        qr_code_copy_paste,
      });

      await this.paymentRepository.save(payment);
    } catch (error) {
      console.error('Error creating payment:', error);
    }
  }

  async generatePaymentIntentPix(
    generatePaymentIntentDto: GeneratePaymentIntentDto,
  ): Promise<unknown> {
    const { amount } = generatePaymentIntentDto;
    try {
      const chavePix = 'SUA_CHAVE_PIX_AQUI';

      const payloadPix = gerarPayloadPix({
        chave: chavePix,
        valor: amount,
        nomeRecebedor: 'NOME RECEBEDOR',
        cidade: 'CIDADE',
      });

      const qrCodeBase64 = await QRCode.toDataURL(payloadPix, {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
        width: 256,
      });

      const generatedQrCodes = {
        qr_code_image_base64: qrCodeBase64,
        qr_code_copy_paste: payloadPix,
      };

      await this.create(generatedQrCodes);

      return generatedQrCodes;
    } catch (error) {
      throw new Error(`Failed to generate QR codes: ${error.message}`);
    }
  }
}
