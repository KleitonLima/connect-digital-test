import { Module } from '@nestjs/common';
import { FeeService } from './fee.service';

@Module({
  providers: [FeeService],
  exports: [FeeService],
})
export class FeeModule {}
