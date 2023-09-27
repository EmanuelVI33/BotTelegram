import { Module } from '@nestjs/common';
import { MultimediaService } from './multimedia.service';
import { MultimediaController } from './multimedia.controller';
import { FileService } from 'src/file_manager/file.service';

@Module({
  controllers: [MultimediaController],
  providers: [MultimediaService, FileService],
  exports: [MultimediaService], // Exponer servicio
})
export class MultimediaModule {}
