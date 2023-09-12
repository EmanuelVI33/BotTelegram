import { Controller, Post, Body } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Post('webhook')
  async handleTelegramWebhook(@Body() body: any) {
    if (body.message && body.message.text) {
      const message = body.message.text;
      await this.telegramService.processTelegramMessage(message);
    }
    return { ok: true };
  }
}
