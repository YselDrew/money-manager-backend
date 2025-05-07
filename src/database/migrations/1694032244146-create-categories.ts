import { MigrationInterface, QueryRunner } from 'typeorm';
import 'dotenv/config';

export class CreateExtensionUuidOssp1694032244146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "categories" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "name" VARCHAR NOT NULL
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "categories"`);
  }
}
