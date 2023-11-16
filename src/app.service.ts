import { Injectable } from '@nestjs/common';
import { AudiuApiService } from './api/audiu-api/audiu-api.service';
import { MediaFileManager } from './utils/MediaFileManager';
import { Multimedia, TipoMultimedia, Audio } from './multimedia/model';
import { MultimediaService } from './multimedia/multimedia.service';

@Injectable()
export class AppService {
  constructor(
    private readonly audiuService: AudiuApiService,
    private readonly mediaFileManager: MediaFileManager,
    private readonly multimediaService: MultimediaService,
  ) {}

  // async searchMultimedia(text: string) {
  //   const idAudiu = await this.audiuService.searchTrack(text); // Buscar música
  //   console.log('Id de audiu' + idAudiu);
  //   const urlAudio = `https://blockchange-audius-discovery-02.bdnodes.net/v1/tracks/${idAudiu}/stream?app_name=EXAMPLEAPP`; // Url
  //   const { id, filePath } = await this.mediaFileManager.downloadAndStoreMedia(
  //     urlAudio,
  //     TipoMultimedia.Audio,
  //   );

  //   console.log(id, filePath);

  //   const multimedia = this.createMultimedia(id, filePath);
  //   this.multimediaService.addMultimedia(multimedia);
  //   // return multimedia;
  //   return this.multimediaService.getData(); // Devuel Json
  // }

  // createMultimedia(id: string, filePath: string): Multimedia {
  //   // TODO: Add validación para video, audio y imagen
  //   return new Audio(id, filePath, 'música');
  // }
}
