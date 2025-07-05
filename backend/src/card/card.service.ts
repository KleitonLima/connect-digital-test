import { Injectable } from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardService {
  create(createCardDto: CreateCardDto) {
    return 'This action adds a new card';
  }

  findOne(id: number) {
    return `This action returns a #${id} card`;
  }
}
