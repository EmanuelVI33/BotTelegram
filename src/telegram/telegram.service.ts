import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TelegramService {
  constructor() {}

  async processTelegramMessage(message: string): Promise<void> {
    // Realiza una solicitud HTTP al controlador de API para pasar el mensaje
    const apiUrl = 'http://localhost:3000/api/create'; // Ajusta la URL según tu configuración
    await axios.post(apiUrl, { message });
  }
}
