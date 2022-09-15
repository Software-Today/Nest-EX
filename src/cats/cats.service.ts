import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {

  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    return cat;
  }

  findAll() {
    return this.cats;
  }

  findOne(id: number) {
    return this.cats[id];
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
