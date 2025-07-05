import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemService {
  create(createItemDto: CreateItemDto) {
    return 'This action adds a new item';
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }
}
