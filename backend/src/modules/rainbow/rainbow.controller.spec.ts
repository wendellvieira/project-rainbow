import { Test, TestingModule } from '@nestjs/testing';
import { RainbowController } from './rainbow.controller';
import { RainbowService } from './rainbow.service';

describe('RainbowController', () => {
  let controller: RainbowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RainbowController],
      providers: [RainbowService],
    }).compile();

    controller = module.get<RainbowController>(RainbowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
