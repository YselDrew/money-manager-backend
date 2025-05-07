import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Account } from '../accounts/account.entity';
import { Category } from '../category/category.entity';

export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

@Entity({ name: 'transactions' })
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: TransactionType })
  type: TransactionType;

  @Column('uuid', {
    name: 'account_id',
  })
  accountId: string;

  @Column('uuid', {
    name: 'category_id',
  })
  categoryId: string;

  @Column('numeric', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'text', nullable: true })
  note: string;

  @CreateDateColumn({ name: 'created_at'})
  createdAt: Date;

  @ManyToOne(() => Account, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'account_id' })
  account: Account;

  @ManyToOne(() => Category, { nullable: false, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}