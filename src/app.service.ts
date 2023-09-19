import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  // async getAudio(text: string) {
  //   try {
  //     const audioId = await this.audiuApiService.searchTrack(text);
  //     return audioId;
  //   } catch (error) {
  //     // Manejar errores si es necesario
  //     console.error('Error al obtener el audio:', error);
  //     throw error; // O puedes devolver un mensaje de error personalizado aquí si lo deseas
  //   }
  // }
}
