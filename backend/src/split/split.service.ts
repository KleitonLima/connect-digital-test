import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSplitDto } from './dto/create-split.dto';
import { Split } from './entities/split.entity';

@Injectable()
export class SplitService {
  constructor(
    @InjectRepository(Split)
    private readonly splitRepository: Repository<Split>,
  ) {}

  async create(createSplitDto: CreateSplitDto): Promise<Split> {
    const { id, recipientId, amount, netAmount } = createSplitDto;

    const split = this.splitRepository.create({
      id,
      recipient_id: recipientId,
      amount,
      net_amount: netAmount,
    });

    return await this.splitRepository.save(split);
  }

  async findOne(id: number): Promise<Split | null> {
    return await this.splitRepository.findOne({ where: { id } });
  }
}
