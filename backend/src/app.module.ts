import { Module } from '@nestjs/common';

import { RainbowModule } from './rainbow/rainbow.module';

@Module({
  imports: [RainbowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
