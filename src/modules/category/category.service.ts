import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepo.find();
  }

  findOne(id: string) {
    return this.categoryRepo.findOneBy({ id });
  }

  create(data: Partial<Category>) {
    const category = this.categoryRepo.create(data);
    return this.categoryRepo.save(category);
  }

  async update(id: string, data: Partial<Category>) {
    await this.categoryRepo.update(id, data);
    return this.categoryRepo.findOneBy({ id });
  }

  async remove(id: string) {
    await this.categoryRepo.delete(id);
    return { deleted: true };
  }
}
