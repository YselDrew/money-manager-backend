import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepo: Repository<Account>,
  ) {}

  findAll(userId: string) {
    return this.accountRepo.find({
      // where: { userId },
      relations: ['group'],
    });
  }

  async findOne(id: string, userId: string) {
    const account = await this.accountRepo.findOne({
      where: { id, userId },
      relations: ['group'],
    });
    if (!account) throw new NotFoundException('Account not found');
    return account;
  }

  async create(data: Partial<Account>, userId: string) {
    const account = this.accountRepo.create({ ...data, userId });
    return this.accountRepo.save(account);
  }

  async update(id: string, data: Partial<Account>, userId: string) {
    const account = await this.findOne(id, userId);
    Object.assign(account, data);
    return this.accountRepo.save(account);
  }

  async remove(id: string, userId: string) {
    const account = await this.findOne(id, userId);
    await this.accountRepo.delete(account.id);
    return { deleted: true };
  }
}