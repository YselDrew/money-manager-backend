import { MigrationInterface, QueryRunner } from 'typeorm';
import 'dotenv/config';

export class CreateExtensionUuidOssp1694032244143 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "transactions" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "type" VARCHAR NOT NULL CHECK (type IN ('income', 'expense')),
        "accountId" uuid NOT NULL,
        "categoryId" uuid,
        "amount" NUMERIC(10, 2) NOT NULL,
        "note" TEXT,
        "createdAt" TIMESTAMP DEFAULT now(),
        CONSTRAINT "fk_account" FOREIGN KEY ("accountId") REFERENCES "accounts"("id") ON DELETE CASCADE,
        CONSTRAINT "fk_category" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "transactions"`);
  }
}
