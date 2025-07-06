import { Injectable } from '@nestjs/common';
import { ENVCONFIG } from 'src/config/env.config';
import { WebhookPayloadDto } from './dto/payload-webhook.dto';
import { CustomerService } from './customer/customer.service';
import { AddressService } from './address/address.service';
import { CardService } from './card/card.service';
import { ItemService } from './item/item.service';
import { SplitService } from './split/split.service';
import { FeeService } from './fee/fee.service';
import { TransactionService } from './transaction/transaction.service';
import { WebhookService } from './webhook/webhook.service';
import { DatabaseService } from './database/db.service';

@Injectable()
export class AppService {
  constructor(
    private readonly customerService: CustomerService,
    private readonly addressService: AddressService,
    private readonly cardService: CardService,
    private readonly itemService: ItemService,
    private readonly splitService: SplitService,
    private readonly feeService: FeeService,
    private readonly transactionService: TransactionService,
    private readonly webhookService: WebhookService,
    private readonly databaseService: DatabaseService,
  ) {}

  getAppStatus(): string {
    return `Server is running! 🚀\n Please check <a href="http://localhost:${ENVCONFIG.PORT}/api/v0/docs">http://localhost:${ENVCONFIG.PORT}/api/v0/docs</a> for Swagger docs...`;
  }

  async transactionsWebhook(data: WebhookPayloadDto) {
    const queryRunner = await this.databaseService.injectQueryRunner();

    try {
      const transactionData = data.data;
      const { customer, card, items, splits, fee } = transactionData;

      const customerResult = await this.customerService.create(
        {
          ...customer,
          documentType: customer.document.type,
          documentNumber: customer.document.number,
          createdAt: customer.createdAt,
        },
        queryRunner,
      );

      const addressResult = await this.addressService.create(
        {
          ...customer.address,
          customerId: customer.id,
        },
        queryRunner,
      );

      const cardResult = await this.cardService.create(card, queryRunner);

      const transactionResult = await this.transactionService.create(
        {
          ...transactionData,
          customerId: customerResult.id,
          cardId: cardResult?.id,
        },
        queryRunner,
      );

      const itemResults = await Promise.all(
        items.map((item) =>
          this.itemService.create(
            {
              ...item,
              transactionId: transactionResult.id,
            },
            queryRunner,
          ),
        ),
      );

      const splitResults = await Promise.all(
        splits.map((split) =>
          this.splitService.create(
            {
              ...split,
              transactionId: transactionResult.id,
            },
            queryRunner,
          ),
        ),
      );

      const feeResult = await this.feeService.create(
        {
          ...fee,
          transactionId: transactionResult.id,
        },
        queryRunner,
      );

      const webhookData = {
        id: data.id,
        type: data.type,
        objectId: transactionResult.id.toString(),
        url: data.url,
      };
      const webhookResult = await this.webhookService.create(
        webhookData,
        queryRunner,
      );

      await queryRunner.commitTransaction();

      return {
        success: true,
        message: 'Webhook processado com sucesso',
        webhookId: data.id,
        objectId: transactionResult.id,
        results: {
          webhook: webhookResult,
          address: addressResult,
          customer: customerResult,
          card: cardResult,
          items: itemResults,
          splits: splitResults,
          fee: feeResult,
          transaction: transactionResult,
        },
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      console.error('Erro ao processar webhook:', error);

      return {
        success: false,
        message: 'Erro ao processar webhook',
        error: error.message,
        webhookId: data.id,
        objectId: data.data?.id,
      };
    } finally {
      await queryRunner.release();
    }
  }

  async getTransactions(filters?: any) {
    try {
      const transactions =
        filters && Object.keys(filters).length > 0
          ? await this.transactionService.findAllWithFilters(filters)
          : await this.transactionService.findAll();

      return {
        success: true,
        message: 'Transações recuperadas com sucesso',
        data: transactions,
        count: transactions.length,
      };
    } catch (error) {
      console.error('Erro ao buscar transações:', error);

      return {
        success: false,
        message: 'Erro ao buscar transações',
        error: error.message,
      };
    }
  }
}
