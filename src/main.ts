import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TelegramBotService } from './telegram-bot/telegram-bot.service';
import { config } from 'dotenv';
import * as express from 'express';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  app.get(TelegramBotService);
  // telegramService.startBot();

  app.enableCors({
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu aplicación React
  });

  app.use('/public/media/audio', express.static('public/media/audio'));

  await app.listen(3000);
}
bootstrap();
