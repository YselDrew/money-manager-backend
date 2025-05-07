import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dataSourceOptions } from '../../database/database.config';
import { GroupModule } from '../groups/group.module';
import { CategoryModule } from '../category/category.module';
import { AccountModule } from '../accounts/account.module';
import { TransactionModule } from '../transactions/transaction.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), GroupModule, CategoryModule, AccountModule, TransactionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
