import { TypeOrmModule } from '@nestjs/typeorm';

export function DatabaseConfig() {
	console.log(__dirname);
	return TypeOrmModule.forRoot({
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'user',
		password: 'password',
		database: 'mydatabase',
		entities: [__dirname + '/../entities/*.entity{.ts,.js}'],
		synchronize: true,
	});
}
