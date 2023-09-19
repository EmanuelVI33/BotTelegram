import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DIdService {
  // async createVideoWithMessage(message: string): Promise<void> {
  //   const apiUrl = 'https://api.d-id.com/talks';
  //   const requestData = {
  //     script: {
  //       type: 'text',
  //       subtitles: 'false',
  //       provider: { type: 'microsoft', voice_id: 'en-US-JennyNeural' },
  //       ssml: 'false',
  //       input: message,
  //     },
  //     config: { fluent: 'false', pad_audio: '0.0' },
  //     source_url: 'https://imgfz.com/i/zyPLMN8.jpeg',
  //   };
  //   try {
  //     const response = await axios.post(apiUrl, requestData, {
  //       headers: {
  //         accept: 'application/json',
  //         'content-type': 'application/json',
  //         authorization: `Basic ${process.env.API_KEY_D_ID}`,
  //       },
  //     });
  //     if (response.status === 200) {
  //       console.log('Video creado con éxito');
  //     } else {
  //       console.error('Error al crear el video');
  //     }
  //   } catch (error) {
  //     console.error('Error en la solicitud a la API d-id', error);
  //   }
  // }
  // async getVideoById(id: string): Promise<any> {
  //   const apiUrl = `https://api.d-id.com/talks/${id}`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       authorization: `Basic ${process.env.API_KEY_D_ID}`, // Reemplaza con tu token de autorización real
  //     },
  //   };
  //   try {
  //     const response = await fetch(apiUrl, options);
  //     const responseData = await response.json();
  //     return responseData;
  //   } catch (error) {
  //     console.error('Error en la solicitud a la API d-id', error);
  //     throw new Error('Error al recuperar el video');
  //   }
  // }
}
