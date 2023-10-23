import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { Program, ProgramSchema } from './entities/program.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentModule } from 'src/content/content.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Program.name, schema: ProgramSchema }]),
    ContentModule,
  ],
  controllers: [ProgramController],
  providers: [ProgramService],
  exports: [ProgramService],
})
export class ProgramModule {}
