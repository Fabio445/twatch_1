import { Module } from '@nestjs/common';
import { PrivatechatService } from './privatechat.service';
import { PrivatechatController } from './privatechat.controller';

@Module({
  controllers: [PrivatechatController],
  providers: [PrivatechatService],
})
export class PrivatechatModule {}
