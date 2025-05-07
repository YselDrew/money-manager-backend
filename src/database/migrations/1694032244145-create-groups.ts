import { MigrationInterface, QueryRunner } from 'typeorm';
import 'dotenv/config';

export class CreateUsers1694032244145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "groups" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "name" VARCHAR NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "groups"`);
  }
}
