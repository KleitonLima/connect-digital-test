import { Module } from '@nestjs/common';
import { CardService } from './card.service';

@Module({
  providers: [CardService],
  exports: [CardService],
})
export class CardModule {}
