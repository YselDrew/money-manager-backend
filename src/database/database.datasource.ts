import { DataSource } from 'typeorm';

import { dataSourceOptions } from './database.config';

export const dataSource = new DataSource(dataSourceOptions);
