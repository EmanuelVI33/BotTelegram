// create-content.dto.ts
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class CreateContentDto {
  @IsString()
  @IsNotEmpty()
  readonly type: string;

  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsOptional()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  readonly duration: number;

  @IsString()
  @IsNotEmpty()
  readonly fileUrl: string;
}
