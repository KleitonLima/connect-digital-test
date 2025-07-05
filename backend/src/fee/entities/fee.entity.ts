import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Fee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  fixed_amount: number;

  @Column({ type: 'int' })
  spread_percentage: number;

  @Column({ type: 'int' })
  estimated_fee: number;

  @Column({ type: 'int' })
  net_amount: number;
}
