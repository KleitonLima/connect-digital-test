import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Item {
  @PrimaryColumn()
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
