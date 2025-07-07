import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Payment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  qr_code_image_base64: string;

  @Column()
  qr_code_copy_paste: string;
}
