import { Module } from '@nestjs/common';

import { RainbowModule } from './modules/rainbow/rainbow.module';

@Module({
  imports: [RainbowModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
