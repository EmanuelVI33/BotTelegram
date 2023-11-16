import {
  Controller,
  Get,
  Post,
  Body,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { ElementService } from './element.service';
import { FileInterceptor } from '@nestjs/platform-express';
// import { CreateElementDto } from './dto/create-element.dto';
// import { UpdateElementDto } from './dto/update-element.dto';

@Controller('element')
export class ElementController {
  constructor(private readonly elementService: ElementService) {}

  // @Post()
  // creates(@Body() elements: any) {
  //   return this.elementService.createOrUpdateElements(elements);
  // }

  @Post()
  @UseInterceptors(FileInterceptor('fileBuffer'))
  create(
    @UploadedFile() fileBuffer: any,
    @Body('data') data: any,
    @Body('element') element: any,
  ) {
    return this.elementService.createOrUpdateElement(
      fileBuffer,
      JSON.parse(data),
      JSON.parse(element),
    );
  }

  @Get()
  getAll() {
    return this.elementService.findAll();
  }
}
