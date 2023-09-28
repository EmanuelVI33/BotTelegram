import { PartialType } from '@nestjs/mapped-types';
import { CreatePresenterDto } from './create-presenter.dto';

export class UpdatePresenterDto extends PartialType(CreatePresenterDto) {}
