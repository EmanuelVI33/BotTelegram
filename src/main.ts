import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import * as express from 'express';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.enableCors({
    origin: 'http://localhost:5173',
  });

  app.use('/public/media/imagen', express.static('public/media/imagen'));

  await app.listen(3010);
}
bootstrap();
