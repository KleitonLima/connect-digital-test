import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeeService } from './fee.service';
import { Fee } from './entities/fee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fee])],
  providers: [FeeService],
  exports: [FeeService],
})
export class FeeModule {}
