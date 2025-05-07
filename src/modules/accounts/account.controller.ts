import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { AccountService } from './account.service';
import { Account } from './account.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';
import { User } from '../auth/get-user.decorator';

@Controller('accounts')
@UseGuards(JwtAuthGuard)
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  findAll(
    @User() { userId }: any
  ): Promise<Account[]> {
    return this.accountService.findAll(userId);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @User() { userId }: any
  ): Promise<Account> {
    return this.accountService.findOne(id, userId);
  }

  @Post()
  create(
    @Body() body: Partial<Account>,
    @User() { userId }: any
  ): Promise<Account> {
    return this.accountService.create(body, userId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() body: Partial<Account>,
    @User() { userId }: any
  ): Promise<Account> {
    return this.accountService.update(id, body, userId);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @User() { userId }: any
  ) {
    return this.accountService.remove(id, userId);
  }
}
