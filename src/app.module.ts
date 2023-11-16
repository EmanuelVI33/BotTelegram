import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AudiuApiModule } from './api/audiu-api/audiu-api.module';
import { ConfigModule } from '@nestjs/config';
import { MultimediaModule } from './multimedia/multimedia.module';
import { MediaFileManager } from './utils/MediaFileManager';
import { FileService } from './file_manager/file.service';
import { ElementModule } from './designed/element/element.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StorageModule } from './designed/storage/storage.module';
import { StorageService } from './designed/storage/storage.service';
import { ProgramModule } from './program/program.module';

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
    AudiuApiModule,
    MultimediaModule,
    ElementModule,
    StorageModule,
    ProgramModule,
  ],
  controllers: [AppController],
  providers: [AppService, MediaFileManager, FileService, StorageService],
})
export class AppModule {}
