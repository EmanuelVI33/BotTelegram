import { Module } from '@nestjs/common';
import { PresenterService } from './presenter.service';
import { PresenterController } from './presenter.controller';
import { Presenter, PresenterSchema } from './entities/presenter.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Presenter.name, schema: PresenterSchema },
    ]),
  ],
  controllers: [PresenterController],
  providers: [PresenterService],
})
export class PresenterModule {}
