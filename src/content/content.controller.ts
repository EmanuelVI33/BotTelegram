import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { Content } from './entities/content.entity';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async findAll(): Promise<Content[]> {
    return this.contentService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Content> {
    return this.contentService.findOne(id);
  }

  @Post()
  async create(@Body() createContentDto: CreateContentDto): Promise<Content> {
    return this.contentService.create(createContentDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateContentDto: UpdateContentDto,
  ): Promise<Content> {
    return this.contentService.update(id, updateContentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.contentService.remove(id);
  }

  @Post(':programId') // Se espera que el ID del programa esté en la ruta
  async createContent(
    @Param('programId') programId: string,
    @Body() contentDto: CreateContentDto,
  ): Promise<any> {
    try {
      // Crea el contenido
      const createdContent = await this.contentService.createContent(
        programId,
        contentDto,
      );

      return {
        programId: programId,
        content: createdContent,
      };
    } catch (error) {
      return { error: 'Custom error message' };
    }
  }
}
