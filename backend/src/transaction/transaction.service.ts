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
}
