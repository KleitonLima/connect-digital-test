import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';
import { IsOptional } from 'class-validator';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  external_ref: string | null;

  @Column()
  title: string;

  @Column({ type: 'int' })
  unit_price: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'boolean' })
  tangible: boolean;

  @Column({ type: 'int' })
  transaction_id: number;

  @IsOptional()
  @ManyToOne(() => Transaction, (transaction) => transaction.items)
  @JoinColumn({ name: 'transaction_id' })
  transaction: Transaction;
}
