import { MigrationInterface, QueryRunner } from 'typeorm';
import 'dotenv/config';

const { DB_NAME, DB_SCHEMA } = process.env;

export class SetSearchPath1694032244142 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER DATABASE ${DB_NAME} SET SEARCH_PATH TO ${DB_SCHEMA}`);
  }

  public async down(): Promise<void> {}
}
