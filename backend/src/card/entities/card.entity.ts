import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Card {
  @PrimaryGeneratedColumn()
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

  @CreateDateColumn()
  created_at: Date;
}
