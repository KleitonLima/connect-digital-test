import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import { CreateAddressDto } from './dto/create-address.dto';
import { Address } from './entities/address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
  ) {}

  async create(
    createAddressDto: CreateAddressDto,
    queryRunner?: QueryRunner,
  ): Promise<Address> {
    const {
      street,
      streetNumber,
      complement,
      zipCode,
      neighborhood,
      city,
      state,
      country,
      customerId,
    } = createAddressDto;

    const address = this.addressRepository.create({
      street,
      street_number: streetNumber,
      complement: complement || null,
      zip_code: zipCode,
      neighborhood,
      city,
      state,
      country,
      customer_id: customerId,
    });

    if (queryRunner) {
      return await queryRunner.manager.save(Address, address);
    }
    return await this.addressRepository.save(address);
  }

  async findOne(id: number): Promise<Address | null> {
    return await this.addressRepository.findOne({ where: { id } });
  }
}
