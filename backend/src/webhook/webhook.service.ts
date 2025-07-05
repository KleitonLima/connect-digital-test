import { Injectable } from '@nestjs/common';
import { CreateWebhookDto } from './dto/create-webhook.dto';

@Injectable()
export class WebhookService {
  create(createWebhookDto: CreateWebhookDto) {
    return 'This action adds a new webhook';
  }

  findOne(id: number) {
    return `This action returns a #${id} webhook`;
  }
}
