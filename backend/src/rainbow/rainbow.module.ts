import { Module } from '@nestjs/common';
import { RainbowService } from './rainbow.service';
import { RainbowController } from './rainbow.controller';

@Module({
  controllers: [RainbowController],
  providers: [RainbowService],
})
export class RainbowModule {}
