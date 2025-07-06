import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';

@Entity()
export class Split {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  recipient_id: number;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'int' })
  net_amount: number;

  @Column({ type: 'int' })
  transaction_id: number;

  @ManyToOne(() => Transaction, (transaction) => transaction.splits)
  @JoinColumn({ name: 'transaction_id' })
  transaction: Transaction;
}
