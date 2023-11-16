import { Controller } from '@nestjs/common';
// import { TelegramBotService } from './telegram-bot.service';

@Controller('telegram-bot')
export class TelegramBotController {
  // constructor(private telegramBotService: TelegramBotService) {}
  //   @Post()
  //   async sendMessage(@Body() requestBody) {
  //     const { chatId, text } = requestBody;
  //     await this.botTelegramService.sendMessage(chatId, text);
  //     return { message: 'Mensaje enviado exitosamente' };
  //   }
}
