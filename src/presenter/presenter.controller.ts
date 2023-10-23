import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PresenterService } from './presenter.service';
import { CreatePresenterDto } from './dto/create-presenter.dto';

@Controller('presenter')
export class PresenterController {
  constructor(private readonly presenterService: PresenterService) {}

  @Post()
  async createPresenter(@Body() presenterDto: CreatePresenterDto) {
    try {
      const createdPresenter =
        await this.presenterService.createPresenter(presenterDto);
      return createdPresenter;
    } catch (error) {
      throw new BadRequestException('Error creating presenter');
    }
  }

  @Get()
  async findAllPresenters() {
    const presenters = await this.presenterService.findAllPresenters();
    return presenters;
  }

  @Get(':id')
  async findOnePresenter(@Param('id') id: string) {
    const presenter = await this.presenterService.findOnePresenter(id);
    if (!presenter) {
      throw new NotFoundException('Presenter not found');
    }
    return presenter;
  }

  @Put(':id')
  async updatePresenter(
    @Param('id') id: string,
    @Body() presenterDto: CreatePresenterDto,
  ) {
    try {
      const updatedPresenter = await this.presenterService.updatePresenter(
        id,
        presenterDto,
      );
      if (!updatedPresenter) {
        throw new NotFoundException('Presenter not found');
      }
      return updatedPresenter;
    } catch (error) {
      throw new BadRequestException('Error updating presenter');
    }
  }

  @Delete(':id')
  async deletePresenter(@Param('id') id: string) {
    const deletedPresenter = await this.presenterService.deletePresenter(id);
    if (!deletedPresenter) {
      throw new NotFoundException('Presenter not found');
    }
    return { message: 'Presenter deleted successfully' };
  }
}
