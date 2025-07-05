import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Webhook {
  @PrimaryColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  object_id: string;

  @Column()
  url: string;
}
