import { Controller } from '@nestjs/common';
import { MultimediaService } from './multimedia.service';

@Controller('multimedia')
export class MultimediaController {
  constructor(private readonly multimediaService: MultimediaService) {}

  // @Post()
  // create(@Body() createMultimediaDto: CreateMultimediaDto) {
  //   return this.multimediaService.create(createMultimediaDto);
  // }
}
