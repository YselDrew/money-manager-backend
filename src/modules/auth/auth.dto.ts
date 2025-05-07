export class SignupDto {
  email: string;
  password: string;
}

export class SigninDto {
  email: string;
  password: string;
}
// src/transaction/dto/create-transaction.dto.ts

import {
  IsUUID,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
  MaxLength,
  Min,
} from 'class-validator';

export enum TransactionType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export class CreateTransactionDto {
  @IsEnum(TransactionType)
  type: TransactionType;

  @IsUUID('4')
  accountId: string;

  @IsUUID('4')
  @IsOptional()
  categoryId?: string;

  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsString()
  @MaxLength(500)
  @IsOptional()
  note?: string;
}
