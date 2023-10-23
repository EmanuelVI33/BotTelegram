import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ProgramService } from './program.service';
import { Program } from './entities/program.entity';
import { CreateProgramDto } from './dto/create-program.dto';
// import { UpdateProgramDto } from './dto/update-program.dto';
import { ContentService } from '../content/content.service';
import { CreateContentDto } from 'src/content/dto/create-content.dto';

@Controller('program')
export class ProgramController {
  constructor(
    private readonly programService: ProgramService,
    private readonly contentService: ContentService,
  ) {}

  @Get()
  async findAll(): Promise<Program[]> {
    return this.programService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Program> {
    return this.programService.findOne(id);
  }

  @Post()
  async create(@Body() createProgramDto: CreateProgramDto): Promise<Program> {
    return this.programService.create(createProgramDto);
  }

  @Post(':programId/contents') // Ruta para agregar contenidos a un programa específico
  async addContentsToProgram(
    @Param('programId') programId: string,
    @Body() contentDataToAdd: CreateContentDto[], // Recibe una lista de datos de contenido
  ) {
    try {
      const program = await this.programService.findOne(programId);
      if (!program) {
        throw new NotFoundException('Program not found');
      }

      const createdContentIds = [];

      // Itera sobre los datos de contenido proporcionados
      for (const contentData of contentDataToAdd) {
        // Crea el contenido en la base de datos utilizando el servicio de contenido
        const createdContent =
          await this.contentService.createContent(contentData);

        // Almacena el ID del contenido creado
        createdContentIds.push(createdContent._id);
      }

      // Asocia los IDs de los contenidos al programa
      program.contents.push(...createdContentIds);

      console.log(program);

      // Guarda el programa en la base de datos utilizando el servicio de programa
      await this.programService.update(programId, program[0]);

      return program;
    } catch (error) {
      throw new NotFoundException('Error adding contents to program');
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramDto: CreateProgramDto,
  ): Promise<Program> {
    return this.programService.update(id, updateProgramDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.programService.remove(id);
  }

  @Get(':id/contents')
  async findProgramWithContents(
    @Param('id') id: string,
  ): Promise<Program | null> {
    return this.programService.findProgramWithContents(id);
  }
}
