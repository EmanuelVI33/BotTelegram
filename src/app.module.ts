import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AudiuApiModule } from './audiu-api/audiu-api.module';
import { ConfigModule } from '@nestjs/config';
import { TelegramBotModule } from './telegram-bot/telegram-bot.module';
import { MultimediaModule } from './multimedia/multimedia.module';
import { MediaFileManager } from './utils/MediaFileManager';
import { FileService } from './file_manager/file.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    EventEmitterModule.forRoot(),
    TelegramBotModule,
    AudiuApiModule,
    MultimediaModule,
  ],
  controllers: [AppController],
  providers: [AppService, MediaFileManager, FileService],
})
export class AppModule {}
