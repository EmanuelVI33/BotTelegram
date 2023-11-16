import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { url } from 'inspector';

@Injectable()
export class DIdService {
  async createVideoWithMessage(message: string) {
    const url = 'https://api.d-id.com/talks';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Basic U2Rzc3M6SG9sYQ==',
      },
      body: JSON.stringify({
        script: {
          type: 'text',
          subtitles: 'false',
          provider: { type: 'microsoft', voice_id: 'en-US-JennyNeural' },
          ssml: 'false',
        },
        config: { fluent: 'false', pad_audio: '0.0' },
        webhook: 'http:localhost:3000/sse',
      }),
    };

    try {
      const response = await axios.post(url, options, {
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          authorization: `Basic ${process.env.API_KEY_D_ID}`,
        },
      });

      return response;
    } catch (error) {
      console.error('Error en la solicitud a la API d-id', error);
    }
  }

  async getVideoById(id: string): Promise<any> {
    const apiUrl = `https://api.d-id.com/talks/${id}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: `Basic ${process.env.API_KEY_D_ID}`, // Reemplaza con tu token de autorización real
      },
    };
    try {
      const response = await fetch(apiUrl, options);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error en la solicitud a la API d-id', error);
      throw new Error('Error al recuperar el video');
    }
  }
}
