import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Split {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  recipient_id: number;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'int' })
  net_amount: number;
}
