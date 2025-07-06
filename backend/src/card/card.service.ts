import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async create(createCardDto: CreateCardDto): Promise<Card> {
    const {
      id,
      brand,
      holderName,
      lastDigits,
      expirationMonth,
      expirationYear,
      reusable,
    } = createCardDto;

    const card = this.cardRepository.create({
      id,
      brand,
      holder_name: holderName,
      last_digits: lastDigits,
      expiration_month: expirationMonth,
      expiration_year: expirationYear,
      reusable,
    });

    return await this.cardRepository.save(card);
  }

  async findOne(id: number): Promise<Card | null> {
    return await this.cardRepository.findOne({ where: { id } });
  }
}
