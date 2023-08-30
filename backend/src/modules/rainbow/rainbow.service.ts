import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { CreateRainbowDto } from './dto/create-rainbow.dto';
import { UpdateRainbowDto } from './dto/update-rainbow.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rainbow } from 'src/entities/rainbow.entity';

@Injectable()
export class RainbowService {
	constructor(
		@InjectRepository(Rainbow)
		private rainbowRepo: Repository<Rainbow>,
	) {}

	async create(createRainbowDto: CreateRainbowDto) {
		await this.checkIfExist(createRainbowDto.email, createRainbowDto.email);

		const rainbow = this.rainbowRepo.create(createRainbowDto);
		return this.rainbowRepo.save(rainbow);
	}

	async checkIfExist(email: string, document: string) {
		const exist = await this.rainbowRepo.exist({
			where: [{ email }, { document }],
		});

		if (exist) {
			throw new BadRequestException(
				'Já existe um registro para este email ou CPF',
			);
		}
	}

	findAll() {
		return this.rainbowRepo.find();
	}

	async findOne(id: number) {
		const rainbow = await this.rainbowRepo.findOneBy({ id });

		if (!rainbow) {
			throw new NotFoundException(`Rainbow with ID ${id} not found`);
		}

		return rainbow;
	}

	findAllColors() {
		return [
			{ nome: 'Vermelho', hex: '#FF0000' },
			{ nome: 'Laranja', hex: '#FF7F00' },
			{ nome: 'Amarelo', hex: '#FFFF00' },
			{ nome: 'Verde', hex: '#008000' },
			{ nome: 'Azul', hex: '#0000FF' },
			{ nome: 'Anil', hex: '#4B0082' },
			{ nome: 'Violeta', hex: '#9400D3' },
		];
	}

	update(id: number, updateRainbowDto: UpdateRainbowDto) {
		return { id, updateRainbowDto };
	}

	remove(id: number) {
		return { id };
	}
}
