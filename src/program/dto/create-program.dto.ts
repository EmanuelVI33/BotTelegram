import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { CreateContentDto } from 'src/content/dto/create-content.dto';

export class CreateProgramDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateContentDto) // Usa un DTO para los contenidos
  readonly contents: CreateContentDto[];
}
