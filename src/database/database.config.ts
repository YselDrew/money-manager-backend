import * as path from 'path';
import 'dotenv/config';

import { DataSourceOptions } from 'typeorm';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_SCHEMA } = process.env;

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  schema: DB_SCHEMA,
  logging: true,
  entities: [path.join(__dirname, '..', 'modules', '**', '*.entity.{ts,js}')],
  migrations: [path.join(__dirname, 'migrations', '*.{ts,js}')],
};
