import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { Account } from '../accounts/account.entity';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private txRepo: Repository<Transaction>,
    @InjectRepository(Account)
    private accountRepo: Repository<Account>,
  ) {}

  async findPaginated(page: number, limit: number) {
    const [items, total] = await this.txRepo.findAndCount({
      relations: {
        category: true,
        account: true, 
      },
      order: { createdAt: 'DESC' },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data: items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  findOne(id: string) {
    return this.txRepo.findOneBy({ id });
  }

  async create(data: Partial<Transaction>) {
    const account = await this.accountRepo.findOneBy({ id: data.accountId });
    if (!account) throw new NotFoundException('Account not found');


    let amount;
    console.log({ data });
    if (data.type === 'income') {
      amount = parseFloat(account.amount.toString()) + parseFloat(data.amount.toString());
    } else if (data.type === 'expense') {
      amount = parseFloat(account.amount.toString()) - parseFloat(data.amount.toString());
    }

    account.amount = amount;

    await this.accountRepo.save(account);

    const tx = this.txRepo.create({ ...data });
    return this.txRepo.save(tx);
  }

  async update(id: string, data: Partial<Transaction>) {
    await this.txRepo.update(id, data);
    return this.txRepo.findOneBy({ id });
  }

  async remove(id: string) {
  const tx = await this.txRepo.findOne({
    where: { id },
    relations: ['account'],
  });

  const account = tx.account;
  let amount = parseFloat(tx.amount.toString());

  if (tx.type === 'expense') {
    amount = parseFloat(account.amount.toString()) + parseFloat(tx.amount.toString());
  } else if (tx.type === 'income') {
    amount = parseFloat(account.amount.toString()) - parseFloat(tx.amount.toString());
  }

  account.amount = amount;

  await this.accountRepo.save(account);
  await this.txRepo.delete(id);

  return { deleted: true };
}
}
