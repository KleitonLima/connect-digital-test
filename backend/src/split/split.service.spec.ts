import { Test, TestingModule } from '@nestjs/testing';
import { SplitService } from './split.service';

describe('SplitService', () => {
  let service: SplitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SplitService],
    }).compile();

    service = module.get<SplitService>(SplitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
