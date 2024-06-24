import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Band } from './entities/band.entity';

@Injectable()
export class BandsService {
  constructor(
    @InjectRepository(Band)
    private bandsRepository: Repository<Band>,
  ) {}

  create(band: Band): Promise<Band> {
    return this.bandsRepository.save(band);
  }

  findAll(): Promise<Band[]> {
    return this.bandsRepository.find({ order: { updated: 'DESC' } });
  }

  findOne(id: string): Promise<Band> {
    return this.bandsRepository.findOneBy({ id });
  }

  remove(id: string): Promise<DeleteResult> {
    return this.bandsRepository.delete(id);
  }
}
