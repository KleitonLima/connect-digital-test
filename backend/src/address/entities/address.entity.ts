import { Entity, PrimaryColumn, Column } from 'typeorm';

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
}
