import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Split {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  recipient_id: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  net_amount: number;
}
