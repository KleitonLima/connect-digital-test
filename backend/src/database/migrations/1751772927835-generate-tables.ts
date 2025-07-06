import { MigrationInterface, QueryRunner } from 'typeorm';

export class GenerateTables1751772927835 implements MigrationInterface {
  name = 'GenerateTables1751772927835';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "seeders" ("id" SERIAL NOT NULL, "timestamp" bigint NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_c47f92b5ea524850088945b62cf" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "address" ("id" integer NOT NULL, "street" character varying NOT NULL, "street_number" character varying NOT NULL, "complement" character varying, "zip_code" character varying(8) NOT NULL, "neighborhood" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying(2) NOT NULL, "country" character varying(2) NOT NULL, "customer_id" integer NOT NULL, CONSTRAINT "REL_9c9614b2f9d01665800ea8dbff" UNIQUE ("customer_id"), CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "customer" ("id" integer NOT NULL, "external_ref" character varying, "name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "birthdate" date, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "document_type" character varying NOT NULL, "document_number" character varying NOT NULL, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "card" ("id" integer NOT NULL, "brand" character varying NOT NULL, "holder_name" character varying NOT NULL, "last_digits" character varying(4) NOT NULL, "expiration_month" integer NOT NULL, "expiration_year" integer NOT NULL, "reusable" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "item" ("id" integer NOT NULL, "external_ref" character varying, "title" character varying NOT NULL, "unit_price" integer NOT NULL, "quantity" integer NOT NULL, "tangible" boolean NOT NULL, "transaction_id" integer NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "split" ("id" integer NOT NULL, "recipient_id" integer NOT NULL, "amount" integer NOT NULL, "net_amount" integer NOT NULL, "transaction_id" integer NOT NULL, CONSTRAINT "PK_a656ea46749d1567ca7e7d5923a" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "fee" ("id" integer NOT NULL, "fixed_amount" integer NOT NULL, "spread_percentage" integer NOT NULL, "estimated_fee" integer NOT NULL, "net_amount" integer NOT NULL, "transaction_id" integer NOT NULL, CONSTRAINT "REL_baa3ca4933b0e50dce6dd5b568" UNIQUE ("transaction_id"), CONSTRAINT "PK_ee7e51cc563615bc60c2b234635" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "transaction" ("id" integer NOT NULL, "amount" integer NOT NULL, "refunded_amount" integer NOT NULL DEFAULT '0', "company_id" integer NOT NULL, "customer_id" integer NOT NULL, "card_id" integer, "installments" integer NOT NULL, "payment_method" character varying NOT NULL, "status" character varying NOT NULL, "postback_url" character varying, "metadata" json, "traceable" boolean NOT NULL DEFAULT false, "secure_id" character varying NOT NULL, "secure_url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "paid_at" TIMESTAMP, "ip" character varying, "external_ref" character varying, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "webhook" ("id" integer NOT NULL, "type" character varying NOT NULL, "object_id" integer NOT NULL, "url" character varying NOT NULL, CONSTRAINT "PK_e6765510c2d078db49632b59020" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" ADD CONSTRAINT "FK_9c9614b2f9d01665800ea8dbff7" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "item" ADD CONSTRAINT "FK_792f5517235e44a8a3b26d221f9" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "split" ADD CONSTRAINT "FK_eaba6accf237a0760da9660d673" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "fee" ADD CONSTRAINT "FK_baa3ca4933b0e50dce6dd5b5687" FOREIGN KEY ("transaction_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "transaction" ADD CONSTRAINT "FK_2403d74bd6e5ca5a94e063c5506" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "transaction" ADD CONSTRAINT "FK_0cdacac0abbf49573c8d8babb6f" FOREIGN KEY ("card_id") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "webhook" ADD CONSTRAINT "FK_00b7d24893f262f84f09740a5ab" FOREIGN KEY ("object_id") REFERENCES "transaction"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "webhook" DROP CONSTRAINT "FK_00b7d24893f262f84f09740a5ab"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transaction" DROP CONSTRAINT "FK_0cdacac0abbf49573c8d8babb6f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "transaction" DROP CONSTRAINT "FK_2403d74bd6e5ca5a94e063c5506"`,
    );
    await queryRunner.query(
      `ALTER TABLE "fee" DROP CONSTRAINT "FK_baa3ca4933b0e50dce6dd5b5687"`,
    );
    await queryRunner.query(
      `ALTER TABLE "split" DROP CONSTRAINT "FK_eaba6accf237a0760da9660d673"`,
    );
    await queryRunner.query(
      `ALTER TABLE "item" DROP CONSTRAINT "FK_792f5517235e44a8a3b26d221f9"`,
    );
    await queryRunner.query(
      `ALTER TABLE "address" DROP CONSTRAINT "FK_9c9614b2f9d01665800ea8dbff7"`,
    );
    await queryRunner.query(`DROP TABLE "webhook"`);
    await queryRunner.query(`DROP TABLE "transaction"`);
    await queryRunner.query(`DROP TABLE "fee"`);
    await queryRunner.query(`DROP TABLE "split"`);
    await queryRunner.query(`DROP TABLE "item"`);
    await queryRunner.query(`DROP TABLE "card"`);
    await queryRunner.query(`DROP TABLE "customer"`);
    await queryRunner.query(`DROP TABLE "address"`);
    await queryRunner.query(`DROP TABLE "seeders"`);
  }
}
