import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  external_ref: string | null;

  @Column()
  title: string;

  @Column({ type: 'int' })
  unit_price: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'boolean' })
  tangible: boolean;
}
