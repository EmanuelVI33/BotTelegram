import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { Content, ContentSchema } from './entities/content.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramModule } from '../program/program.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Content.name, schema: ContentSchema }]),
    ProgramModule,
  ],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
