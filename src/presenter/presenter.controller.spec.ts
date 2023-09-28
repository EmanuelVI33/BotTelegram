import { Test, TestingModule } from '@nestjs/testing';
import { PresenterController } from './presenter.controller';
import { PresenterService } from './presenter.service';

describe('PresenterController', () => {
  let controller: PresenterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PresenterController],
      providers: [PresenterService],
    }).compile();

    controller = module.get<PresenterController>(PresenterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
