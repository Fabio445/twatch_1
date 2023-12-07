import { PartialType } from '@nestjs/mapped-types';
import { CreatePrivatechatDto } from './create-privatechat.dto';

export class UpdatePrivatechatDto extends PartialType(CreatePrivatechatDto) {}
