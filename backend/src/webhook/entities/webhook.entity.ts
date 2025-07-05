import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';

@Entity()
export class Webhook {
  @PrimaryColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  object_id: string;

  @Column()
  url: string;

  @ManyToOne(() => Transaction, (transaction) => transaction.webhooks)
  @JoinColumn({
    name: 'object_id',
    referencedColumnName: 'id',
  })
  transaction: Transaction;
}
