import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  async create(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const {
      amount,
      refundedAmount,
      companyId,
      installments,
      paymentMethod,
      status,
      postbackUrl,
      metadata,
      traceable,
      secureId,
      secureUrl,
      paidAt,
      ip,
      externalRef,
    } = createTransactionDto;

    const transaction = this.transactionRepository.create({
      amount,
      refunded_amount: refundedAmount,
      company_id: companyId,
      installments,
      payment_method: paymentMethod,
      status,
      postback_url: postbackUrl || null,
      metadata: metadata || null,
      traceable,
      secure_id: secureId,
      secure_url: secureUrl,
      paid_at: paidAt ? new Date(paidAt) : null,
      ip: ip || null,
      external_ref: externalRef || null,
    });

    return await this.transactionRepository.save(transaction);
  }

  async findAll(): Promise<Transaction[]> {
    return await this.transactionRepository.find();
  }

  async findOne(id: number): Promise<Transaction | null> {
    return await this.transactionRepository.findOne({ where: { id } });
  }

  async findAllWithFilters(filters: any): Promise<any[]> {
    const queryBuilder = this.transactionRepository
      .createQueryBuilder('transaction')
      .leftJoinAndSelect('customer', 'customer', 'customer.id = transaction.id')
      .leftJoinAndSelect('address', 'address', 'address.id = customer.id')
      .leftJoinAndSelect('card', 'card', 'card.id = transaction.id')
      .select([
        'transaction.*',
        'customer.name as customer_name',
        'customer.email as customer_email',
        'customer.phone as customer_phone',
        'customer.document_type as customer_document_type',
        'customer.document_number as customer_document_number',
        'address.street as address_street',
        'address.street_number as address_street_number',
        'address.complement as address_complement',
        'address.zip_code as address_zip_code',
        'address.neighborhood as address_neighborhood',
        'address.city as address_city',
        'address.state as address_state',
        'address.country as address_country',
        'card.brand as card_brand',
        'card.holder_name as card_holder_name',
        'card.last_digits as card_last_digits',
      ]);

    Object.keys(filters).forEach((key) => {
      if (
        filters[key] !== undefined &&
        filters[key] !== null &&
        filters[key] !== ''
      ) {
        switch (key) {
          case 'customer':
            queryBuilder.andWhere('customer.name LIKE :customer', {
              customer: `%${filters[key]}%`,
            });
            break;
          case 'city':
            queryBuilder.andWhere('address.city LIKE :city', {
              city: `%${filters[key]}%`,
            });
            break;
          case 'email':
            queryBuilder.andWhere('customer.email LIKE :email', {
              email: `%${filters[key]}%`,
            });
            break;
          case 'state':
            queryBuilder.andWhere('address.state LIKE :state', {
              state: `%${filters[key]}%`,
            });
            break;
          case 'card_brand':
            queryBuilder.andWhere('card.brand LIKE :card_brand', {
              card_brand: `%${filters[key]}%`,
            });
            break;
          default:
            if (typeof filters[key] === 'string') {
              queryBuilder.andWhere(`transaction.${key} LIKE :${key}`, {
                [key]: `%${filters[key]}%`,
              });
            } else {
              queryBuilder.andWhere(`transaction.${key} = :${key}`, {
                [key]: filters[key],
              });
            }
            break;
        }
      }
    });

    return await queryBuilder.getRawMany();
  }
}
