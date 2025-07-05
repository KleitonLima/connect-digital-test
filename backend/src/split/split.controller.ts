import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SplitService } from './split.service';
import { CreateSplitDto } from './dto/create-split.dto';

@Controller('split')
export class SplitController {
  constructor(private readonly splitService: SplitService) {}

  @Post()
  create(@Body() createSplitDto: CreateSplitDto) {
    return this.splitService.create(createSplitDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.splitService.findOne(+id);
  }
}
