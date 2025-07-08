import { Controller, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { PaymentService } from './payment.service';
import { GeneratePaymentIntentDto } from './dto/generate-payment-intent.dto';

@ApiTags('Payments')
@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('pix')
  @ApiOperation({ summary: 'Gerar intenção de pagamento PIX' })
  @ApiResponse({
    status: 201,
    description: 'Intenção de pagamento PIX gerada com sucesso',
    example: {
      qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
      qrCodeText: '00020126580014br.gov.bcb.pix...',
    },
  })
  @ApiBody({
    description: 'Dados para gerar a intenção de pagamento PIX',
    type: GeneratePaymentIntentDto,
    examples: {
      exemplo: {
        summary: 'Exemplo de pagamento PIX',
        value: {
          amount: 10000,
        },
      },
    },
  })
  async generatePaymentIntentPix(
    @Body() generatePaymentIntentDto: GeneratePaymentIntentDto,
  ) {
    return this.paymentService.generatePaymentIntentPix(
      generatePaymentIntentDto,
    );
  }
}
