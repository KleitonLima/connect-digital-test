import { Entity, PrimaryColumn, Column, OneToMany, OneToOne } from 'typeorm';
import { Transaction } from '../../transaction/entities/transaction.entity';
import { Address } from '../../address/entities/address.entity';

@Entity()
export class Customer {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'varchar', nullable: true })
  external_ref: string | null;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ type: 'date', nullable: true })
  birthdate: Date | null;

  @Column({ type: 'date', nullable: true })
  created_at: Date | null;

  @Column()
  document_type: string;

  @Column()
  document_number: string;

  @OneToMany(() => Transaction, (transaction) => transaction.customer)
  transactions: Transaction[];

  @OneToOne(() => Address, (address) => address.customer)
  address: Address;
}
