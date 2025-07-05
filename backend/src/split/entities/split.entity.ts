import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Split {
  @PrimaryColumn()
  id: number;

  @Column({ type: 'int' })
  recipient_id: number;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'int' })
  net_amount: number;
}
