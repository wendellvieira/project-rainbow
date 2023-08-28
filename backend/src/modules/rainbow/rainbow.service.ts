import { Injectable, NotFoundException } from '@nestjs/common';
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

	create(createRainbowDto: CreateRainbowDto) {
		return this.rainbowRepo.create(createRainbowDto);
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

	update(id: number, updateRainbowDto: UpdateRainbowDto) {
		return { id, updateRainbowDto };
	}

	remove(id: number) {
		return { id };
	}
}
