import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rainbow {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fullName: string;

	@Column()
	document: string;

	@Column()
	email: string;

	@Column()
	color: string;

	@Column()
	comments: string;
}
