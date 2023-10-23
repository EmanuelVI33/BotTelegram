import { Module } from '@nestjs/common';
import { ElementService } from './element.service';
import { ElementController } from './element.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ElementInfo } from './entities/element-info.entity';
import { Imagen } from './entities/imagen.entity';
import { Video } from './entities/video.entity';
import { PresenterVideo } from './entities/presenter-video.entity';
import { Music } from './entities/music.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ElementInfo,
      Imagen,
      Video,
      PresenterVideo,
      Music,
    ]),
  ],
  controllers: [ElementController],
  providers: [ElementService],
})
export class ElementModule {}
