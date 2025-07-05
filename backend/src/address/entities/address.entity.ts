import { Entity, PrimaryColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Customer } from '../../customer/entities/customer.entity';

@Entity()
export class Address {
  @PrimaryColumn()
  id: number;

  @Column()
  street: string;

  @Column()
  street_number: string;

  @Column({ nullable: true })
  complement: string | null;

  @Column({ length: 8 })
  zip_code: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 2 })
  country: string;

  @Column({ type: 'int' })
  customer_id: number;

  @OneToOne(() => Customer, (customer) => customer.address)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;
}
