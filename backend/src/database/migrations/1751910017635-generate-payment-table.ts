import { MigrationInterface, QueryRunner } from 'typeorm';

export class GeneratePaymentTable1751910017635 implements MigrationInterface {
  name = 'GeneratePaymentTable1751910017635';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "payment" ("id" SERIAL NOT NULL, "qr_code_image_base64" character varying NOT NULL, "qr_code_copy_paste" character varying NOT NULL, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "payment"`);
  }
}
