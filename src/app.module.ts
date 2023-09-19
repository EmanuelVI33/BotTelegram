import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AudiuApiModule } from './audiu-api/audiu-api.module';
import { ConfigModule } from '@nestjs/config';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    TelegramBotModule,
    AudiuApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
