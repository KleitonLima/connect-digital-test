import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeeDto } from './dto/create-fee.dto';
import { Fee } from './entities/fee.entity';

@Injectable()
export class FeeService {
  constructor(
    @InjectRepository(Fee)
    private readonly feeRepository: Repository<Fee>,
  ) {}

  async create(createFeeDto: CreateFeeDto): Promise<Fee> {
    const { fixedAmount, spreadPercentage, estimatedFee, netAmount } =
      createFeeDto;

    const fee = this.feeRepository.create({
      fixed_amount: fixedAmount,
      spread_percentage: spreadPercentage,
      estimated_fee: estimatedFee,
      net_amount: netAmount,
    });

    return await this.feeRepository.save(fee);
  }

  async findOne(id: number): Promise<Fee | null> {
    return await this.feeRepository.findOne({ where: { id } });
  }
}
