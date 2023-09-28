import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProgramService } from './program.service';
import { Program } from './entities/program.entity';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Controller('program')
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

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

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProgramDto: UpdateProgramDto,
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
