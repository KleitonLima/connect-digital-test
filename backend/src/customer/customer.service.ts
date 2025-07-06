import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryRunner } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(
    createCustomerDto: CreateCustomerDto,
    queryRunner?: QueryRunner,
  ): Promise<Customer> {
    const {
      id,
      externalRef,
      name,
      email,
      phone,
      birthdate,
      documentType,
      documentNumber,
    } = createCustomerDto;

    const customer = this.customerRepository.create({
      id,
      external_ref: externalRef,
      name,
      email,
      phone,
      birthdate: birthdate,
      document_type: documentType,
      document_number: documentNumber,
    });

    if (queryRunner) {
      return await queryRunner.manager.save(Customer, customer);
    }
    return await this.customerRepository.save(customer);
  }

  async findOne(id: number): Promise<Customer | null> {
    return await this.customerRepository.findOne({ where: { id } });
  }
}
