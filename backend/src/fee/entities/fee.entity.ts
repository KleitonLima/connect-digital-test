import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';

@Entity()
export class Fee {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'int' })
  fixed_amount: number;

  @Column({ type: 'int' })
  spread_percentage: number;

  @Column({ type: 'int' })
  estimated_fee: number;

  @Column({ type: 'int' })
  net_amount: number;

  @Column({ type: 'int' })
  transaction_id: number;

  @OneToOne(() => Transaction, (transaction) => transaction.fee)
  @JoinColumn({ name: 'transaction_id' })
  transaction: Transaction;
}
