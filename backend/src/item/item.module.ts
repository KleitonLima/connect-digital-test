import { Module } from '@nestjs/common';
import { ItemService } from './item.service';

@Module({
  providers: [ItemService],
  exports: [ItemService],
})
export class ItemModule {}
