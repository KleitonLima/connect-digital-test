import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Fee {
  @PrimaryColumn()
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
