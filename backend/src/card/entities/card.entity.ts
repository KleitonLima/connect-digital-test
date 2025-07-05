import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';

@Entity()
export class Card {
  @PrimaryColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  holder_name: string;

  @Column({ length: 4 })
  last_digits: string;

  @Column({ type: 'int' })
  expiration_month: number;

  @Column({ type: 'int' })
  expiration_year: number;

  @Column({ type: 'boolean', default: true })
  reusable: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Transaction, (transaction) => transaction.card)
  transactions: Transaction[];
}
