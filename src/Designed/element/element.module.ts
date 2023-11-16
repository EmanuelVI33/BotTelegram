import { Module } from '@nestjs/common';
import { ElementService } from './element.service';
import { ElementController } from './element.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Element } from './entities/element.entity';
import { Imagen } from './entities/imagen.entity';
import { Video } from './entities/video.entity';
import { PresenterVideo } from './entities/presenter-video.entity';
import { Music } from './entities/music.entity';
import { StorageService } from '../storage/storage.service';
import { MediaFileManager } from 'src/utils/MediaFileManager';

@Module({
  imports: [
    TypeOrmModule.forFeature([Element, Imagen, Video, PresenterVideo, Music]),
  ],
  controllers: [ElementController],
  providers: [ElementService, StorageService, MediaFileManager],
})
export class ElementModule {}
