import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
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
}
