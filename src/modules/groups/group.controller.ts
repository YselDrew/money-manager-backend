import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { GroupService } from './group.service';
import { Group } from './group.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('groups')
@UseGuards(JwtAuthGuard)
export class GroupController {
  constructor(private readonly groupService: GroupService) {}

  @Get()
  findAll(): Promise<Group[]> {
    return this.groupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Group> {
    return this.groupService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Group>): Promise<Group> {
    return this.groupService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<Group>): Promise<Group> {
    return this.groupService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupService.remove(id);
  }
}
