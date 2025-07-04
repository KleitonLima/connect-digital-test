import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AddressModule } from './address/address.module';
import { CustomerModule } from './customer/customer.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [AddressModule, CustomerModule, CardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
