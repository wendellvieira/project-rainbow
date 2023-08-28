import { Module } from '@nestjs/common';
import { RainbowService } from './rainbow.service';
import { RainbowController } from './rainbow.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rainbow } from 'src/entities/rainbow.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Rainbow])],
	controllers: [RainbowController],
	providers: [RainbowService],
})
export class RainbowModule {}
