import { TypeOrmModule } from '@nestjs/typeorm';

export function DatabaseConfig() {
	return TypeOrmModule.forRoot({
		type: 'postgres',
		host: 'database',
		port: 5432,
		username: 'user',
		password: 'password',
		database: 'mydatabase',
		entities: [__dirname + '/**/*.entity{.ts,.js}'],
		synchronize: true,
	});
}
