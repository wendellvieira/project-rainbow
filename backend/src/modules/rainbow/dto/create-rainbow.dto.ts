import { IsString } from 'class-validator';

export class CreateRainbowDto {
	@IsString()
	fullName: string;

	@IsString()
	document: string;

	@IsString()
	email: string;

	@IsString()
	color: string;

	@IsString()
	comments: string;
}
