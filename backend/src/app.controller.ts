import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { WebhookPayloadDto } from './dto/payload-webhook.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAppStatus(): string {
    return this.appService.getAppStatus();
  }

  @Post('transactions/webhook')
  async transactionsWebhook(@Body() webhookPayload: WebhookPayloadDto) {
    return await this.appService.transactionsWebhook(webhookPayload);
  }
}
