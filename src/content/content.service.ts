import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Content } from './entities/content.entity';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
// import { ProgramService } from 'src/program/program.service';

@Injectable()
export class ContentService {
  constructor(
    @InjectModel(Content.name)
    private readonly contentModel: Model<Content>, // private readonly programService: ProgramService,
  ) {}

  async findAll(): Promise<Content[]> {
    return this.contentModel.find().populate('presenter').exec();
  }

  async findOne(id: string): Promise<Content> {
    return this.contentModel.findById(id).populate('presenter').exec();
  }

  async create(createContentDto: CreateContentDto): Promise<Content> {
    const newContent = new this.contentModel(createContentDto);
    return newContent.save();
  }

  async update(
    id: string,
    updateContentDto: UpdateContentDto,
  ): Promise<Content> {
    await this.contentModel.findByIdAndUpdate(id, updateContentDto).exec();
    return this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.contentModel.findByIdAndRemove(id).exec();
  }

  async createContent(
    // programId: string,
    contentDto: CreateContentDto,
  ): Promise<Content> {
    try {
      // Crea el contenido
      const createdContent = new this.contentModel(contentDto);
      const savedContent = await createdContent.save();

      // // Asocia el ID del contenido al programa
      // await this.programService.addContentToProgram(
      //   programId,
      //   savedContent._id,
      // );

      return savedContent;
    } catch (error) {
      throw error;
    }
  }

  //  Almacenar varios contenidos
  // async createContents(
  //   programId: string,
  //   contentsData: CreateContentDto[],
  // ): Promise<string[]> {
  //   const createdContentIds = [];

  //   for (const contentData of contentsData) {
  //     const createdContent = await this.createContent(programId, contentData);
  //     createdContentIds.push(createdContent._id);
  //   }

  //   return createdContentIds;
  // }

  async findOneContentWithPresenter(id: string): Promise<Content | null> {
    try {
      return await this.contentModel.findById(id).populate('presenter').exec();
    } catch (error) {
      throw new NotFoundException('Content not found');
    }
  }
}
