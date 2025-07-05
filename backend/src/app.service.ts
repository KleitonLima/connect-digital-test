import { Injectable } from '@nestjs/common';
import { ENVCONFIG } from 'src/config/env.config';
import { WebhookPayloadDto } from './dto/payload-webhook.dto';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return `Server is running! 🚀\n Please check <a href="http://localhost:${ENVCONFIG.PORT}/api/v0/docs">http://localhost:${ENVCONFIG.PORT}/api/v0/docs</a> for Swagger docs...`;
  }

  receiveWebhook(data: WebhookPayloadDto) {
    console.log('Received webhook data:', data);
    return {
      message: 'Webhook received successfully!',
      status: 'success',
      timestamp: new Date(),
    };
  }
}
