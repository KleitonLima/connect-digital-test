import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateWebhookDto } from './dto/create-webhook.dto';
import { Webhook } from './entities/webhook.entity';

@Injectable()
export class WebhookService {
  constructor(
    @InjectRepository(Webhook)
    private readonly webhookRepository: Repository<Webhook>,
  ) {}

  async create(createWebhookDto: CreateWebhookDto): Promise<Webhook> {
    const { type, objectId, url } = createWebhookDto;

    const webhook = this.webhookRepository.create({
      type,
      object_id: objectId,
      url,
    });

    return await this.webhookRepository.save(webhook);
  }

  async findOne(id: number): Promise<Webhook | null> {
    return await this.webhookRepository.findOne({ where: { id } });
  }
}
