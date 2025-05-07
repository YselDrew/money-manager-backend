import { MigrationInterface, QueryRunner } from 'typeorm';
import 'dotenv/config';

export class CreateUsers1694032244144 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "email" VARCHAR NOT NULL,
        "hash" VARCHAR NOT NULL,
        "admin" BOOLEAN NOT NULL DEFAULT true
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
