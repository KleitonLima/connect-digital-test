import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { GeneratePaymentIntentDto } from './dto/generate-payment-intent.dto';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pix')
  async generatePaymentIntentPix(
    @Body() generatePaymentIntentDto: GeneratePaymentIntentDto,
  ) {
    return this.paymentService.generatePaymentIntentPix(
      generatePaymentIntentDto,
    );
  }
}
