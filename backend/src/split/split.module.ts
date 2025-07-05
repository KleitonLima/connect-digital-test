import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SplitService } from './split.service';
import { Split } from './entities/split.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Split])],
  providers: [SplitService],
  exports: [SplitService],
})
export class SplitModule {}
