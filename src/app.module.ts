import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { Wallet } from './wallet/entities/wallet.entity';
import { UserModule } from './user/user.module';
import { WalletModule } from './wallet/wallet.module';
import { TransactionModule } from './transaction/transaction.module';
import { Transaction } from './transaction/entities/transaction.entity';
import { PrivatechatModule } from './privatechat/privatechat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'twatch',
      entities: [User,Wallet,Transaction],
      synchronize: false,
    }),
    UserModule,
    WalletModule,
    TransactionModule,
    PrivatechatModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
