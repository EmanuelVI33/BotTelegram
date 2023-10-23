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
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramModule } from './program/program.module';
import { ContentModule } from './content/content.module';
import { PresenterModule } from './presenter/presenter.module';
import { ElementModule } from './designed/element/element.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Nombre del archivo de la base de datos
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Esto crea automáticamente las tablas al iniciar la aplicación (solo para desarrollo)
    }),
    EventEmitterModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost:27017/content_programming'),
    TelegramBotModule,
    AudiuApiModule,
    MultimediaModule,
    ContentModule,
    ProgramModule,
    PresenterModule,
    ElementModule,
  ],
  controllers: [AppController],
  providers: [AppService, MediaFileManager, FileService],
})
export class AppModule {}
