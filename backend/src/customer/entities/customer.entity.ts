import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';
import { Address } from '../../address/entities/address.entity';

@Entity()
export class Customer {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  external_ref: string | null;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: 'date', nullable: true })
  birthdate: Date | null;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  document_type: string;

  @Column()
  document_number: string;

  @OneToMany(() => Transaction, (transaction) => transaction.customer)
  transactions: Transaction[];

  @OneToOne(() => Address, (address) => address.customer)
  address: Address;
}
