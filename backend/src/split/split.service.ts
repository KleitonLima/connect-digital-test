import { Injectable } from '@nestjs/common';
import { CreateSplitDto } from './dto/create-split.dto';

@Injectable()
export class SplitService {
  create(createSplitDto: CreateSplitDto) {
    return 'This action adds a new split';
  }

  findOne(id: number) {
    return `This action returns a #${id} split`;
  }
}
