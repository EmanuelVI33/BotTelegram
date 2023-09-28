import { Test, TestingModule } from '@nestjs/testing';
import { PresenterService } from './presenter.service';

describe('PresenterService', () => {
  let service: PresenterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PresenterService],
    }).compile();

    service = module.get<PresenterService>(PresenterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
