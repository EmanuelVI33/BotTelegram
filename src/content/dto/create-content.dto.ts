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
  @IsOptional()
  readonly duration?: number;

  @IsString()
  @IsOptional()
  readonly fileUrl?: string;

  @IsString()
  @IsOptional()
  readonly localePath?: string;

  @IsString()
  @IsOptional()
  readonly presenter?: string;
}
