import { Injectable } from '@nestjs/common';
import { CreateRainbowDto } from './dto/create-rainbow.dto';
import { UpdateRainbowDto } from './dto/update-rainbow.dto';

@Injectable()
export class RainbowService {
  create(createRainbowDto: CreateRainbowDto) {
    return 'This action adds a new rainbow';
  }

  findAll() {
    return `This action returns all rainbow`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rainbow`;
  }

  update(id: number, updateRainbowDto: UpdateRainbowDto) {
    return `This action updates a #${id} rainbow`;
  }

  remove(id: number) {
    return `This action removes a #${id} rainbow`;
  }
}
