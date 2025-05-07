import { Controller, Get, Post, Param, Body, Patch, Delete, UseGuards, Query } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('transactions')
@UseGuards(JwtAuthGuard)
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get()
  findAll(
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    return this.transactionService.findPaginated(+page, +limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Transaction> {
    return this.transactionService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Transaction>): Promise<Transaction> {
    return this.transactionService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<Transaction>): Promise<Transaction> {
    return this.transactionService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(id);
  }
}
