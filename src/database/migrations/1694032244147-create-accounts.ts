import { MigrationInterface, QueryRunner } from 'typeorm';
import 'dotenv/config';

export class CreateExtensionUuidOssp1694032244143 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "accounts" (
        "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
        "name" VARCHAR(50) NOT NULL,
        "amount" NUMERIC(10, 2) NOT NULL,
        "currency" VARCHAR NOT NULL,
        "description" VARCHAR(500),
        "groupId" uuid NOT NULL,
        "userId" uuid NOT NULL,
        CONSTRAINT "fk_group" FOREIGN KEY ("groupId") REFERENCES "groups"("id") ON DELETE CASCADE,
        CONSTRAINT "fk_user" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE
      )
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "accounts"`);
  }
}
