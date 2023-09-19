import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TelegramBotService } from './telegram-bot/telegram-bot.service';
import { config } from 'dotenv';

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);

  app.get(TelegramBotService);
  // telegramService.startBot();

  app.enableCors({
    origin: 'http://localhost:5173', // Reemplaza con la URL de tu aplicación React
  });

  await app.listen(3000);
}
bootstrap();
