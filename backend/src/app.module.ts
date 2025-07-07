import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { CustomerModule } from './customer/customer.module';
import { CardModule } from './card/card.module';
import { ItemModule } from './item/item.module';
import { SplitModule } from './split/split.module';
import { FeeModule } from './fee/fee.module';
import { TransactionModule } from './transaction/transaction.module';
import { WebhookModule } from './webhook/webhook.module';
import { AppDataSource } from './database/typeorm.db';
import { DatabaseService } from './database/db.service';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),

    AddressModule,
    CustomerModule,
    CardModule,
    ItemModule,
    SplitModule,
    FeeModule,
    TransactionModule,
    WebhookModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
