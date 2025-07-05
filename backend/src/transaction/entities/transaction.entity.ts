import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';
import { Card } from '../../card/entities/card.entity';
import { Item } from '../../item/entities/item.entity';
import { Split } from '../../split/entities/split.entity';
import { Fee } from '../../fee/entities/fee.entity';
import { Webhook } from '../../webhook/entities/webhook.entity';

@Entity()
export class Transaction {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'int', default: 0 })
  refunded_amount: number;

  @Column({ type: 'int' })
  company_id: number;

  @Column({ type: 'int' })
  customer_id: number;

  @Column({ type: 'int', nullable: true })
  card_id: number | null;

  @Column({ type: 'int' })
  installments: number;

  @Column()
  payment_method: string;

  @Column()
  status: string;

  @Column({ nullable: true })
  postback_url: string | null;

  @Column({ type: 'json', nullable: true })
  metadata: object | null;

  @Column({ type: 'boolean', default: false })
  traceable: boolean;

  @Column()
  secure_id: string;

  @Column()
  secure_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ type: 'timestamp', nullable: true })
  paid_at: Date | null;

  @Column({ nullable: true })
  ip: string | null;

  @Column({ nullable: true })
  external_ref: string | null;

  @ManyToOne(() => Customer, (customer) => customer.transactions)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => Card, (card) => card.transactions, { nullable: true })
  @JoinColumn({ name: 'card_id' })
  card: Card | null;

  @OneToMany(() => Item, (item) => item.transaction)
  items: Item[];

  @OneToMany(() => Split, (split) => split.transaction)
  splits: Split[];

  @OneToOne(() => Fee, (fee) => fee.transaction)
  fee: Fee;

  @OneToMany(() => Webhook, (webhook) => webhook.transaction)
  webhooks: Webhook[];
}
