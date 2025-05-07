import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Group } from './group.entity';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group)
    private groupRepo: Repository<Group>,
  ) {}

  findAll() {
    return this.groupRepo.find();
  }

  findOne(id: string) {
    return this.groupRepo.findOneBy({ id });
  }

  create(data: Partial<Group>) {
    const group = this.groupRepo.create(data);
    return this.groupRepo.save(group);
  }

  async update(id: string, data: Partial<Group>) {
    await this.groupRepo.update(id, data);
    return this.groupRepo.findOneBy({ id });
  }

  async remove(id: string) {
    await this.groupRepo.delete(id);
    return { deleted: true };
  }
}
