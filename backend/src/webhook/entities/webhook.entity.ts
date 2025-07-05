import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Webhook {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  object_id: string;

  @Column()
  url: string;
}
