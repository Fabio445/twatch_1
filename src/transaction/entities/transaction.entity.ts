import { Wallet } from '../../wallet/entities/wallet.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  idTransaction: number;

  @ManyToOne(() => Wallet, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idSender' })
  sender: Wallet;

  @ManyToOne(() => Wallet, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'idReceiver' })
  receiver: Wallet;
}
