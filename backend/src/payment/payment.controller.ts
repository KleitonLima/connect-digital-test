import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { GeneratePaymentIntentDto } from './dto/generate-payment-intent.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  async create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Post('payments/pix')
  async generatePaymentIntentPix(
    @Body() generatePaymentIntentDto: GeneratePaymentIntentDto,
  ) {
    return this.paymentService.generatePaymentIntentPix(
      generatePaymentIntentDto,
    );
  }
}
