import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'dotenv/config';

import { AppModule } from './modules/app/app.module';
import { setupSwagger } from './swagger/swagger';

const { APP_PORT } = process.env;

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  setupSwagger(app);

  await app.listen(Number(APP_PORT));
}

bootstrap();

// mailer for monthly
// tasks for any updated logic

// category
  // shoping
  // rent
  // utils
  // transport
  // education
// subcategory
  // rent:
    // unit 1
    // unit 2
// account
  // 
// transaction: 
  // type: income, expense
  // accountId
  // categoryId
  // amount
  // note
