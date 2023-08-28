import { PartialType } from '@nestjs/mapped-types';
import { CreateRainbowDto } from './create-rainbow.dto';

export class UpdateRainbowDto extends PartialType(CreateRainbowDto) {}
