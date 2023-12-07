import { Injectable } from '@nestjs/common';
import { CreatePrivatechatDto } from './dto/create-privatechat.dto';
import { UpdatePrivatechatDto } from './dto/update-privatechat.dto';

@Injectable()
export class PrivatechatService {
  create(createPrivatechatDto: CreatePrivatechatDto) {
    return 'This action adds a new privatechat';
  }

  findAll() {
    return `This action returns all privatechat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} privatechat`;
  }

  update(id: number, updatePrivatechatDto: UpdatePrivatechatDto) {
    return `This action updates a #${id} privatechat`;
  }

  remove(id: number) {
    return `This action removes a #${id} privatechat`;
  }
}
