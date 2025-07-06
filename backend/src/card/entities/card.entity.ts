import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';
import { IsOptional } from 'class-validator';

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

  @Column({ type: 'date' })
  created_at: Date;

  @IsOptional()
  @OneToMany(() => Transaction, (transaction) => transaction.card)
  transactions: Transaction[];
}
