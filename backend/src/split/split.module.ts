import { Module } from '@nestjs/common';
import { SplitService } from './split.service';

@Module({
  providers: [SplitService],
  exports: [SplitService],
})
export class SplitModule {}
