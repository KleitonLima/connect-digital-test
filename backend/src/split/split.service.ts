import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import { CreateSplitDto } from './dto/create-split.dto';
import { Split } from './entities/split.entity';

@Injectable()
export class SplitService {
  constructor(
    @InjectRepository(Split)
    private readonly splitRepository: Repository<Split>,
  ) {}

  async create(
    createSplitDto: CreateSplitDto,
    queryRunner?: QueryRunner,
  ): Promise<Split> {
    const { recipientId, amount, netAmount, transactionId } = createSplitDto;

    const split = this.splitRepository.create({
      recipient_id: recipientId,
      amount,
      net_amount: netAmount,
      transaction_id: transactionId,
    });

    if (queryRunner) {
      return await queryRunner.manager.save(Split, split);
    }
    return await this.splitRepository.save(split);
  }

  async findOne(id: number): Promise<Split | null> {
    return await this.splitRepository.findOne({ where: { id } });
  }
}
