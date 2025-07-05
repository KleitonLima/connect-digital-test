import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const {
      externalRef,
      name,
      email,
      phone,
      birthdate,
      documentType,
      documentNumber,
    } = createCustomerDto;

    const customer = this.customerRepository.create({
      external_ref: externalRef || null,
      name,
      email,
      phone,
      birthdate: birthdate ? new Date(birthdate) : null,
      document_type: documentType,
      document_number: documentNumber,
    });

    return await this.customerRepository.save(customer);
  }

  async findOne(id: number): Promise<Customer | null> {
    return await this.customerRepository.findOne({ where: { id } });
  }
}
