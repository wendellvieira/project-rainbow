import { Module } from '@nestjs/common';

import { RainbowModule } from './modules/rainbow/rainbow.module';
import { DatabaseConfig } from './configs/Database';

@Module({
	imports: [DatabaseConfig(), RainbowModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
