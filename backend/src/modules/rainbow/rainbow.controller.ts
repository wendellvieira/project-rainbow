import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
} from '@nestjs/common';
import { RainbowService } from './rainbow.service';
import { CreateRainbowDto } from './dto/create-rainbow.dto';
import { UpdateRainbowDto } from './dto/update-rainbow.dto';

@Controller('rainbow')
export class RainbowController {
	constructor(private readonly rainbowService: RainbowService) {}

	@Post()
	create(@Body() createRainbowDto: CreateRainbowDto) {
		return this.rainbowService.create(createRainbowDto);
	}

	@Get()
	findAll() {
		return this.rainbowService.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.rainbowService.findOne(+id);
	}

	@Patch(':id')
	update(
		@Param('id') id: string,
		@Body() updateRainbowDto: UpdateRainbowDto,
	) {
		return this.rainbowService.update(+id, updateRainbowDto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.rainbowService.remove(+id);
	}
}
