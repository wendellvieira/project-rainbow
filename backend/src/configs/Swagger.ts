import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export function SwaggerConfig(app: INestApplication) {
	const config = new DocumentBuilder()
		.setTitle('Api Rainbow')
		.setDescription('The rainbow API')
		.setVersion('1.0')
		.addTag('rainbow')
		.build();

	const document = SwaggerModule.createDocument(app, config);

	SwaggerModule.setup('api', app, document);
}
