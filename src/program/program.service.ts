import { Injectable } from '@nestjs/common';
import { CreateProgramDto } from './dto/create-program.dto';
// import { UpdateProgramDto } from './dto/update-program.dto';
import { Program } from './entities/program.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
  ) {}

  async findAll(): Promise<Program[]> {
    return this.programRepository.find();
  }

  async create(createProgramDto: CreateProgramDto): Promise<Program> {
    const program = this.programRepository.create(createProgramDto);
    return this.programRepository.save(program);
  }

  findOne(id: number) {
    return `This action returns a #${id} program`;
  }

  // update(id: number, updateProgramDto: UpdateProgramDto) {
  //   return `This action updates a #${id} program`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} program`;
  // }
}
