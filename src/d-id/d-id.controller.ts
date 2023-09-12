import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { DIdService } from './d-id.service';

@Controller('d-id')
export class DIdController {
  constructor(private readonly apiService: DIdService) {}

  @Post()
  async createVideo(@Body() body: { message: string }): Promise<void> {
    const { message } = body;
    await this.apiService.createVideoWithMessage(message);
  }

  @Get(':id')
  async getVideoById(@Param('id') id: string) {
    return this.apiService.getVideoById(id);
  }
}
