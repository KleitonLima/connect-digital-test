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
      .leftJoin('customer', 'customer', 'customer.id = transaction.id')
      .leftJoin('address', 'address', 'address.id = customer.id')
      .leftJoin('card', 'card', 'card.id = transaction.id')
      .leftJoin('item', 'item', 'item.id = transaction.id')
      .leftJoin('split', 'split', 'split.id = transaction.id')
      .leftJoin('fee', 'fee', 'fee.id = transaction.id')
      .leftJoin(
        'webhook',
        'webhook',
        'webhook.object_id = CAST(transaction.id AS VARCHAR)',
      )
      .select([
        'transaction.id as id',
        'transaction.amount as amount',
        'transaction.refunded_amount as refunded_amount',
        'transaction.company_id as company_id',
        'transaction.installments as installments',
        'transaction.payment_method as payment_method',
        'transaction.status as status',
        'transaction.postback_url as postback_url',
        'transaction.metadata as metadata',
        'transaction.traceable as traceable',
        'transaction.secure_id as secure_id',
        'transaction.secure_url as secure_url',
        'transaction.created_at as created_at',
        'transaction.updated_at as updated_at',
        'transaction.paid_at as paid_at',
        'transaction.ip as ip',
        'transaction.external_ref as external_ref',

        'customer.id as customer_id',
        'customer.external_ref as customer_external_ref',
        'customer.name as customer_name',
        'customer.email as customer_email',
        'customer.phone as customer_phone',
        'customer.birthdate as customer_birthdate',
        'customer.created_at as customer_created_at',
        'customer.document_type as customer_document_type',
        'customer.document_number as customer_document_number',

        'address.id as address_id',
        'address.street as address_street',
        'address.street_number as address_street_number',
        'address.complement as address_complement',
        'address.zip_code as address_zip_code',
        'address.neighborhood as address_neighborhood',
        'address.city as address_city',
        'address.state as address_state',
        'address.country as address_country',

        'card.id as card_id',
        'card.brand as card_brand',
        'card.holder_name as card_holder_name',
        'card.last_digits as card_last_digits',
        'card.expiration_month as card_expiration_month',
        'card.expiration_year as card_expiration_year',
        'card.reusable as card_reusable',
        'card.created_at as card_created_at',

        'item.id as item_id',
        'item.external_ref as item_external_ref',
        'item.title as item_title',
        'item.unit_price as item_unit_price',
        'item.quantity as item_quantity',
        'item.tangible as item_tangible',

        'split.id as split_id',
        'split.recipient_id as split_recipient_id',
        'split.amount as split_amount',
        'split.net_amount as split_net_amount',

        'fee.id as fee_id',
        'fee.fixed_amount as fee_fixed_amount',
        'fee.spread_percentage as fee_spread_percentage',
        'fee.estimated_fee as fee_estimated_fee',
        'fee.net_amount as fee_net_amount',

        'webhook.id as webhook_id',
        'webhook.type as webhook_type',
        'webhook.object_id as webhook_object_id',
        'webhook.url as webhook_url',
      ]);

    this.applyFilters(queryBuilder, filters);

    return await queryBuilder.getRawMany();
  }

  private applyFilters(queryBuilder: any, filters: any): void {
    Object.keys(filters).forEach((key) => {
      if (
        filters[key] !== undefined &&
        filters[key] !== null &&
        filters[key] !== ''
      ) {
        this.applyFilter(queryBuilder, key, filters[key]);
      }
    });
  }

  private applyFilter(queryBuilder: any, key: string, value: any): void {
    if (this.isTransactionFilter(key, value, queryBuilder)) return;

    if (this.isCustomerFilter(key, value, queryBuilder)) return;

    if (this.isAddressFilter(key, value, queryBuilder)) return;

    if (this.isCardFilter(key, value, queryBuilder)) return;

    if (this.isItemFilter(key, value, queryBuilder)) return;

    if (this.isSplitFilter(key, value, queryBuilder)) return;

    if (this.isFeeFilter(key, value, queryBuilder)) return;

    if (this.isWebhookFilter(key, value, queryBuilder)) return;

    this.applyDefaultFilter(queryBuilder, key, value);
  }

  private isTransactionFilter(
    key: string,
    value: any,
    queryBuilder: any,
  ): boolean {
    const numericFields = [
      'id',
      'amount',
      'refunded_amount',
      'company_id',
      'installments',
    ];
    const stringFields = [
      'payment_method',
      'status',
      'postback_url',
      'secure_id',
      'secure_url',
      'ip',
      'external_ref',
    ];
    const booleanFields = ['traceable'];
    const dateFields = ['paid_at', 'created_at', 'updated_at'];

    if (numericFields.includes(key)) {
      queryBuilder.andWhere(`transaction.${key} = :${key}`, { [key]: value });
      return true;
    }

    if (stringFields.includes(key)) {
      queryBuilder.andWhere(`transaction.${key} LIKE :${key}`, {
        [key]: `%${value}%`,
      });
      return true;
    }

    if (booleanFields.includes(key)) {
      queryBuilder.andWhere(`transaction.${key} = :${key}`, { [key]: value });
      return true;
    }

    if (dateFields.includes(key)) {
      queryBuilder.andWhere(`transaction.${key} = :${key}`, { [key]: value });
      return true;
    }

    return false;
  }

  private isCustomerFilter(
    key: string,
    value: any,
    queryBuilder: any,
  ): boolean {
    const filterMap = {
      customer_name: 'customer.name',
      customer: 'customer.name',
      customer_email: 'customer.email',
      email: 'customer.email',
      customer_phone: 'customer.phone',
      customer_external_ref: 'customer.external_ref',
      customer_document_type: 'customer.document_type',
      document_type: 'customer.document_type',
      customer_document_number: 'customer.document_number',
      document_number: 'customer.document_number',
    };

    const dateFields = ['customer_birthdate', 'customer_created_at'];

    if (filterMap[key]) {
      queryBuilder.andWhere(`${filterMap[key]} LIKE :${key}`, {
        [key]: `%${value}%`,
      });
      return true;
    }

    if (dateFields.includes(key)) {
      const field = key.replace('customer_', 'customer.');
      queryBuilder.andWhere(`${field} = :${key}`, { [key]: value });
      return true;
    }

    return false;
  }

  private isAddressFilter(key: string, value: any, queryBuilder: any): boolean {
    const filterMap = {
      address_street: 'address.street',
      address_street_number: 'address.street_number',
      address_complement: 'address.complement',
      address_zip_code: 'address.zip_code',
      address_neighborhood: 'address.neighborhood',
      address_city: 'address.city',
      city: 'address.city',
      address_state: 'address.state',
      state: 'address.state',
      address_country: 'address.country',
    };

    if (filterMap[key]) {
      queryBuilder.andWhere(`${filterMap[key]} LIKE :${key}`, {
        [key]: `%${value}%`,
      });
      return true;
    }

    return false;
  }

  private isCardFilter(key: string, value: any, queryBuilder: any): boolean {
    const stringFields = {
      card_brand: 'card.brand',
      card_holder_name: 'card.holder_name',
      card_last_digits: 'card.last_digits',
    };

    const numericFields = ['card_expiration_month', 'card_expiration_year'];
    const booleanFields = ['card_reusable'];
    const dateFields = ['card_created_at'];

    if (stringFields[key]) {
      queryBuilder.andWhere(`${stringFields[key]} LIKE :${key}`, {
        [key]: `%${value}%`,
      });
      return true;
    }

    if (numericFields.includes(key) || booleanFields.includes(key)) {
      const field = key.replace('card_', 'card.');
      queryBuilder.andWhere(`${field} = :${key}`, { [key]: value });
      return true;
    }

    if (dateFields.includes(key)) {
      queryBuilder.andWhere('card.created_at = :card_created_at', {
        card_created_at: value,
      });
      return true;
    }

    return false;
  }

  private isItemFilter(key: string, value: any, queryBuilder: any): boolean {
    const stringFields = {
      item_external_ref: 'item.external_ref',
      item_title: 'item.title',
    };

    const numericFields = ['item_unit_price', 'item_quantity'];
    const booleanFields = ['item_tangible'];

    if (stringFields[key]) {
      queryBuilder.andWhere(`${stringFields[key]} LIKE :${key}`, {
        [key]: `%${value}%`,
      });
      return true;
    }

    if (numericFields.includes(key) || booleanFields.includes(key)) {
      const field = key.replace('item_', 'item.');
      queryBuilder.andWhere(`${field} = :${key}`, { [key]: value });
      return true;
    }

    return false;
  }

  private isSplitFilter(key: string, value: any, queryBuilder: any): boolean {
    const numericFields = [
      'split_recipient_id',
      'split_amount',
      'split_net_amount',
    ];

    if (numericFields.includes(key)) {
      const field = key.replace('split_', 'split.');
      queryBuilder.andWhere(`${field} = :${key}`, { [key]: value });
      return true;
    }

    return false;
  }

  private isFeeFilter(key: string, value: any, queryBuilder: any): boolean {
    const numericFields = [
      'fee_fixed_amount',
      'fee_spread_percentage',
      'fee_estimated_fee',
      'fee_net_amount',
    ];

    if (numericFields.includes(key)) {
      const field = key.replace('fee_', 'fee.');
      queryBuilder.andWhere(`${field} = :${key}`, { [key]: value });
      return true;
    }

    return false;
  }

  private isWebhookFilter(key: string, value: any, queryBuilder: any): boolean {
    const stringFields = {
      webhook_type: 'webhook.type',
      webhook_object_id: 'webhook.object_id',
      webhook_url: 'webhook.url',
    };

    if (stringFields[key]) {
      queryBuilder.andWhere(`${stringFields[key]} LIKE :${key}`, {
        [key]: `%${value}%`,
      });
      return true;
    }

    return false;
  }

  private applyDefaultFilter(queryBuilder: any, key: string, value: any): void {
    if (typeof value === 'string') {
      queryBuilder.andWhere(`transaction.${key} LIKE :${key}`, {
        [key]: `%${value}%`,
      });
    } else {
      queryBuilder.andWhere(`transaction.${key} = :${key}`, { [key]: value });
    }
  }
}
