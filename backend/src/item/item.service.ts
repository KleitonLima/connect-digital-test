import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import { CreateItemDto } from './dto/create-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async create(
    createItemDto: CreateItemDto,
    queryRunner?: QueryRunner,
  ): Promise<Item> {
    const { externalRef, title, unitPrice, quantity, tangible, transactionId } =
      createItemDto;

    const item = this.itemRepository.create({
      external_ref: externalRef || null,
      title,
      unit_price: unitPrice,
      quantity,
      tangible,
      transaction_id: transactionId,
    });

    if (queryRunner) {
      return await queryRunner.manager.save(Item, item);
    }
    return await this.itemRepository.save(item);
  }

  async findOne(id: number): Promise<Item | null> {
    return await this.itemRepository.findOne({ where: { id } });
  }
}
