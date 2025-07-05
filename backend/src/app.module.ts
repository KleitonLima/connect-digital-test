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
import { ENVCONFIG } from './config/env.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: ENVCONFIG.DATABASE_URL,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // Em produção deve ser false
      logging: true,
    }),
    AddressModule,
    CustomerModule,
    CardModule,
    ItemModule,
    SplitModule,
    FeeModule,
    TransactionModule,
    WebhookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
