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
  @ApiOperation({ summary: 'Listar transações com filtros opcionais' })
  @ApiResponse({
    status: 200,
    description: 'Lista de transações retornada com sucesso',
  })
  @ApiQuery({
    name: 'status',
    required: false,
    description: 'Filtrar por status da transação',
  })
  @ApiQuery({
    name: 'customer',
    required: false,
    description: 'Filtrar por nome do cliente',
  })
  @ApiQuery({
    name: 'city',
    required: false,
    description: 'Filtrar por cidade',
  })
  @ApiQuery({
    name: 'payment_method',
    required: false,
    description: 'Filtrar por método de pagamento',
  })
  @ApiQuery({
    name: 'amount',
    required: false,
    description: 'Filtrar por valor',
  })
  async getTransactions(@Query() query: TransactionFiltersDto) {
    return await this.appService.getTransactions(query);
  }
}
