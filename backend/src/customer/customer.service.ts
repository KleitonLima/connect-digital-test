import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomerService {
  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }
}
