import { Controller, Get, Post, Body, Param, Patch, Delete, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { Category } from './category.entity';
import { JwtAuthGuard } from '../auth/jwt.guard';

@Controller('categories')
@UseGuards(JwtAuthGuard)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findOne(id);
  }

  @Post()
  create(@Body() body: Partial<Category>): Promise<Category> {
    return this.categoryService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Partial<Category>): Promise<Category> {
    return this.categoryService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
