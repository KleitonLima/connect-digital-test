import { Injectable } from '@nestjs/common';
import { CreateFeeDto } from './dto/create-fee.dto';

@Injectable()
export class FeeService {
  create(createFeeDto: CreateFeeDto) {
    return 'This action adds a new fee';
  }

  findOne(id: number) {
    return `This action returns a #${id} fee`;
  }
}
