import { Module } from '@nestjs/common';
import { PresenterService } from './presenter.service';
import { PresenterController } from './presenter.controller';

@Module({
  controllers: [PresenterController],
  providers: [PresenterService],
})
export class PresenterModule {}
