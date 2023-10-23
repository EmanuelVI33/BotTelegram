import { IsString, IsOptional } from 'class-validator';

export class CreatePresenterDto {
  @IsString()
  readonly name: string;

  @IsString()
  @IsOptional()
  readonly localePath?: string;

  @IsString()
  @IsOptional()
  readonly voice?: string = 'es-BO-MarceloNeural'; // Voz por defecto
}
