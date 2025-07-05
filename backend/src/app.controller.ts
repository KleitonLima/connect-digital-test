import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { WebhookPayloadDto } from './dto/payload-webhook.dto';
import { TransactionFiltersDto } from './dto/transaction-filters.dto';

@ApiTags('Transactions')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }

  @Post('transactions/webhook')
  @ApiOperation({ summary: 'Receber webhook de transação' })
  @ApiResponse({ status: 200, description: 'Webhook processado com sucesso' })
  async transactionsWebhook(@Body() webhookPayload: WebhookPayloadDto) {
    return await this.appService.transactionsWebhook(webhookPayload);
  }

  @Get('transactions')
  @ApiOperation({
    summary: 'Listar transações com filtros opcionais',
    description:
      'Busca transações aplicando filtros em todos os dados do webhook. Suporta pesquisa por dados da transação, cliente, endereço, cartão, itens, splits, fees e webhook.',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de transações retornada com sucesso',
  })
  @ApiQuery({
    name: 'id',
    required: false,
    description: 'Filtrar por ID da transação',
    type: 'number',
  })
  @ApiQuery({
    name: 'amount',
    required: false,
    description: 'Filtrar por valor da transação',
    type: 'number',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description:
      'Filtrar por status da transação (pending, paid, refused, refunded, cancelled)',
  })
  @ApiQuery({
    name: 'payment_method',
    required: false,
    description:
      'Filtrar por método de pagamento (credit_card, debit_card, pix, boleto)',
  })
  @ApiQuery({
    name: 'external_ref',
    required: false,
    description: 'Filtrar por referência externa da transação',
  })
  @ApiQuery({
    name: 'customer_name',
    required: false,
    description: 'Filtrar por nome do cliente',
  })
  @ApiQuery({
    name: 'customer',
    required: false,
    description: 'Alias para customer_name - Filtrar por nome do cliente',
  })
  @ApiQuery({
    name: 'customer_email',
    required: false,
    description: 'Filtrar por email do cliente',
  })
  @ApiQuery({
    name: 'email',
    required: false,
    description: 'Alias para customer_email - Filtrar por email do cliente',
  })
  @ApiQuery({
    name: 'customer_phone',
    required: false,
    description: 'Filtrar por telefone do cliente',
  })
  @ApiQuery({
    name: 'customer_document_number',
    required: false,
    description: 'Filtrar por número do documento do cliente',
  })
  @ApiQuery({
    name: 'document_number',
    required: false,
    description:
      'Alias para customer_document_number - Filtrar por número do documento',
  })
  @ApiQuery({
    name: 'address_city',
    required: false,
    description: 'Filtrar por cidade do endereço',
  })
  @ApiQuery({
    name: 'city',
    required: false,
    description: 'Alias para address_city - Filtrar por cidade',
  })
  @ApiQuery({
    name: 'address_state',
    required: false,
    description: 'Filtrar por estado do endereço',
  })
  @ApiQuery({
    name: 'state',
    required: false,
    description: 'Alias para address_state - Filtrar por estado',
  })
  @ApiQuery({
    name: 'address_zip_code',
    required: false,
    description: 'Filtrar por CEP',
  })
  @ApiQuery({
    name: 'address_neighborhood',
    required: false,
    description: 'Filtrar por bairro',
  })
  @ApiQuery({
    name: 'card_brand',
    required: false,
    description:
      'Filtrar por bandeira do cartão (visa, mastercard, amex, elo, diners, hipercard)',
  })
  @ApiQuery({
    name: 'card_holder_name',
    required: false,
    description: 'Filtrar por nome do portador do cartão',
  })
  @ApiQuery({
    name: 'card_last_digits',
    required: false,
    description: 'Filtrar pelos últimos 4 dígitos do cartão',
  })
  @ApiQuery({
    name: 'item_title',
    required: false,
    description: 'Filtrar por título do item',
  })
  @ApiQuery({
    name: 'item_unit_price',
    required: false,
    description: 'Filtrar por preço unitário do item',
    type: 'number',
  })
  @ApiQuery({
    name: 'webhook_type',
    required: false,
    description:
      'Filtrar por tipo do webhook (transaction, payment, subscription, refund)',
  })
  async getTransactions(@Query() query: TransactionFiltersDto) {
    return await this.appService.getTransactions(query);
  }
}
