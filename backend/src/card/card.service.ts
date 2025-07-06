import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import { CreateCardDto } from './dto/create-card.dto';
import { Card } from './entities/card.entity';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card)
    private readonly cardRepository: Repository<Card>,
  ) {}

  async create(
    createCardDto: CreateCardDto,
    queryRunner?: QueryRunner,
  ): Promise<Card> {
    const {
      id,
      brand,
      holderName,
      lastDigits,
      expirationMonth,
      expirationYear,
      reusable,
      createdAt,
    } = createCardDto;

    const card = this.cardRepository.create({
      id,
      brand,
      holder_name: holderName,
      last_digits: lastDigits,
      expiration_month: expirationMonth,
      expiration_year: expirationYear,
      reusable,
      created_at: createdAt,
    });

    if (queryRunner) {
      return await queryRunner.manager.save(Card, card);
    }
    return await this.cardRepository.save(card);
  }

  async findOne(id: number): Promise<Card | null> {
    return await this.cardRepository.findOne({ where: { id } });
  }
}
