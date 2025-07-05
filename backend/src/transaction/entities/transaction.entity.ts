import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'int', default: 0 })
  refunded_amount: number;

  @Column({ type: 'int' })
  company_id: number;

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
}
