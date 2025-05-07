import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Group } from '../groups/group.entity';
import { User } from '../users/user.entity';

export enum CurrencyEnum {
  UAH = 'uah',
  USD = 'usd',
  EUR = 'eur',
}

@Entity({ name: 'accounts' })
export class Account {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', {
    name: 'group_id'
  })
  groupId: string;

  @Column({ length: 50 })
  name: string;

  @Column('numeric', { precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'enum', enum: CurrencyEnum })
  currency: CurrencyEnum;

  @Column({ length: 500 })
  description: string;

  @Column('uuid', {
    name: 'user_id'
  })
  userId: string;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Group, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'group_id' })
  group: Group;
}
