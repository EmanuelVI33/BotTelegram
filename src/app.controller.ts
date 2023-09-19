import { Controller, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { OnEvent } from '@nestjs/event-emitter';
import { Observable, Subject } from 'rxjs';
import { AudiuApiService } from './audiu-api/audiu-api.service';

export interface MessageEvent {
  data: string | object;
  id?: string;
  type?: string;
  retry?: number;
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private audiuApiService: AudiuApiService,
  ) {}

  private messageSubject = new Subject<string>();

  @OnEvent('message_received') // Escuchar el evento 'message_received'
  async handleMessageReceivedEvent(text: { text: string }) {
    if (text) {
      try {
        const audioId = await this.audiuApiService.searchTrack(text.text);
        this.messageSubject.next(audioId);
      } catch (error) {
        console.error('Error al obtener el audio:', error);
        this.messageSubject.next('Error al buscar audio');
      }
    }
  }

  @Sse('sse')
  sse(): Observable<MessageEvent> {
    return new Observable((observer) => {
      this.messageSubject.subscribe((message) => {
        const eventData = JSON.stringify({ message });
        observer.next(new MessageEvent('message', { data: eventData }));
      });
    });
  }
}

// import { Controller, Sse } from '@nestjs/common';
// import { AppService } from './app.service';
// import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';
// import { Observable, Subject } from 'rxjs';

// export interface MessageEvent {
//   data: string | object;
//   id?: string;
//   type?: string;
//   retry?: number;
// }

// @Controller()
// export class AppController {
//   constructor(
//     private readonly appService: AppService, // private readonly eventEmitter: EventEmitter2,
//     private eventEmitter: EventEmitter2,
//   ) {}

//   private messageSubject = new Subject<string>();

//   @OnEvent('message_received') // Escuchar el evento 'message_received'
//   handleMessageReceivedEvent(text: { text: string }) {
//     if (text) {
//       // Emitir el mensaje al cliente a través de SSE
//       this.messageSubject.next(text.text);
//     }
//   }

//   @Sse('sse')
//   sse(): Observable<MessageEvent> {
//     return new Observable((observer) => {
//       this.messageSubject.subscribe((message) => {
//         const eventData = JSON.stringify({ message });
//         observer.next(new MessageEvent('message', { data: eventData }));
//       });
//     });
//   }
// }
