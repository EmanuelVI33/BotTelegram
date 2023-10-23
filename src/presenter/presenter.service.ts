import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePresenterDto } from './dto/create-presenter.dto';
import { Presenter } from './entities/presenter.entity';

@Injectable()
export class PresenterService {
  constructor(
    @InjectModel(Presenter.name)
    private readonly presenterModel: Model<Presenter>,
  ) {}

  async createPresenter(presenterDto: CreatePresenterDto): Promise<Presenter> {
    const createdPresenter = new this.presenterModel(presenterDto);
    return await createdPresenter.save();
  }

  async findAllPresenters(): Promise<Presenter[]> {
    return await this.presenterModel.find().exec();
  }

  async findOnePresenter(id: string): Promise<Presenter | null> {
    return await this.presenterModel.findById(id).exec();
  }

  async updatePresenter(
    id: string,
    presenterDto: CreatePresenterDto,
  ): Promise<Presenter | null> {
    const updatedPresenter = await this.presenterModel
      .findByIdAndUpdate(id, presenterDto, { new: true })
      .exec();
    return updatedPresenter;
  }

  async deletePresenter(id: string): Promise<Presenter | null> {
    return await this.presenterModel.findByIdAndDelete(id).exec();
  }
}
