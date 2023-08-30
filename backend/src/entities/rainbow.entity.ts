import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rainbow {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fullName: string;

	@Column({ unique: true })
	document: string;

	@Column({ unique: true })
	email: string;

	@Column()
	color: string;

	@Column()
	comments: string;
}
