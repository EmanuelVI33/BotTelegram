import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PresenterService } from './presenter.service';
import { CreatePresenterDto } from './dto/create-presenter.dto';
import { UpdatePresenterDto } from './dto/update-presenter.dto';

@Controller('presenter')
export class PresenterController {
  constructor(private readonly presenterService: PresenterService) {}

  @Post()
  create(@Body() createPresenterDto: CreatePresenterDto) {
    return this.presenterService.create(createPresenterDto);
  }

  @Get()
  findAll() {
    return this.presenterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.presenterService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePresenterDto: UpdatePresenterDto) {
    return this.presenterService.update(+id, updatePresenterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.presenterService.remove(+id);
  }
}
