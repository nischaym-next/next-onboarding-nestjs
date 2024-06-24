import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { BandsService } from './bands.service';
import { Band } from './entities/band.entity';

@Controller('api/bands')
export class BandsController {
  constructor(private readonly bandsService: BandsService) {}

  @Post()
  create(@Body() band: Band): Promise<Band> {
    return this.bandsService.create(band);
  }

  @Get()
  findAll(): Promise<Band[]> {
    return this.bandsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Band> {
    return this.bandsService.findOne(id);
  }

  @Delete(':id')
  async remove(
    @Param('id') id: string,
  ): Promise<{ success: boolean; id: string }> {
    try {
      await this.bandsService.remove(id);
      return { success: true, id };
    } catch (error) {
      throw new Error(error);
    }
  }
}
