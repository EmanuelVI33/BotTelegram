import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Program } from './entities/program.entity';
import { CreateProgramDto } from './dto/create-program.dto';
import { UpdateProgramDto } from './dto/update-program.dto';

@Injectable()
export class ProgramService {
  constructor(
    @InjectModel(Program.name)
    private readonly programModel: Model<Program>,
  ) {}

  async findAll(): Promise<Program[]> {
    return this.programModel.find().exec();
  }

  async findOne(id: string): Promise<Program> {
    return this.programModel.findById(id).exec();
  }

  async create(createProgramDto: CreateProgramDto): Promise<Program> {
    try {
      const newProgram = new this.programModel(createProgramDto);
      return await newProgram.save();
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async update(
    id: string,
    updateProgramDto: CreateProgramDto,
  ): Promise<Program> {
    return this.programModel
      .findByIdAndUpdate(id, updateProgramDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<void> {
    await this.programModel.findByIdAndRemove(id).exec();
  }

  async findProgramWithContents(id: string): Promise<Program> {
    const program = await this.programModel
      .findById(id)
      .populate('contents')
      .exec();

    // Si no hay contenido, establece la propiedad 'contents' como un arreglo vacío
    if (!program) {
      return new this.programModel({ ...program.toObject(), contents: [] });
    }

    return program;
  }

  async addContentToProgram(
    programId: string,
    contentId: string,
  ): Promise<Program> {
    // Encuentra el programa por su ID
    const program = await this.programModel.findById(programId);

    console.log(`Encontro program ${program}`);

    if (!program) {
      throw new Error('Program not found');
    }

    // Agrega el ID del contenido a la lista de contenidos del programa
    program.contents.push(contentId);

    // Guarda el programa actualizado en la base de datos
    return program.save();
  }

  // async findProgramWithContents(id: string): Promise<Program | null> {
  //   return this.programModel.findById(id).populate('contents').exec();
  // }

  private handleExceptions(error: any) {
    if (error.code === 11000) {
      throw new BadRequestException(
        `Pokemon exists in db ${JSON.stringify(error.keyValue)}`, // Para manejar respuesta
      );
    }

    return new InternalServerErrorException(
      `Can't create Pokemon - Check sever logs`,
    );
  }
}
