import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerConfig } from './configs/Swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });

	app.setGlobalPrefix('v1');

	SwaggerConfig(app);

	await app.listen(3030);
}

bootstrap();
