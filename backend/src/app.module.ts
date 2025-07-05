import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { CustomerModule } from './customer/customer.module';
import { CardModule } from './card/card.module';
import { ItemModule } from './item/item.module';
import { SplitModule } from './split/split.module';
import { FeeModule } from './fee/fee.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [AddressModule, CustomerModule, CardModule, ItemModule, SplitModule, FeeModule, TransactionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
