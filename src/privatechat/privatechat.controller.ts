import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrivatechatService } from './privatechat.service';
import { CreatePrivatechatDto } from './dto/create-privatechat.dto';
import { UpdatePrivatechatDto } from './dto/update-privatechat.dto';

@Controller('privatechat')
export class PrivatechatController {
  constructor(private readonly privatechatService: PrivatechatService) {}

  @Post()
  create(@Body() createPrivatechatDto: CreatePrivatechatDto) {
    return this.privatechatService.create(createPrivatechatDto);
  }

  @Get()
  findAll() {
    return this.privatechatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.privatechatService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrivatechatDto: UpdatePrivatechatDto) {
    return this.privatechatService.update(+id, updatePrivatechatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privatechatService.remove(+id);
  }
}
