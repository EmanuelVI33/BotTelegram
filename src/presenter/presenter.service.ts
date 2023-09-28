import { Injectable } from '@nestjs/common';
import { CreatePresenterDto } from './dto/create-presenter.dto';
import { UpdatePresenterDto } from './dto/update-presenter.dto';

@Injectable()
export class PresenterService {
  create(createPresenterDto: CreatePresenterDto) {
    return 'This action adds a new presenter';
  }

  findAll() {
    return `This action returns all presenter`;
  }

  findOne(id: number) {
    return `This action returns a #${id} presenter`;
  }

  update(id: number, updatePresenterDto: UpdatePresenterDto) {
    return `This action updates a #${id} presenter`;
  }

  remove(id: number) {
    return `This action removes a #${id} presenter`;
  }
}
