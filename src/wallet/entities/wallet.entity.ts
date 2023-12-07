import { Transaction } from '../../transaction/entities/transaction.entity';
import { User } from '../../user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';

@Entity()
export class Wallet {
  @PrimaryGeneratedColumn()
  idWallet: number;

  @Column()
  Saldo: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  UpdatedAt: Date | null;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'idUser' })
  user: User;

  @OneToMany(() => Transaction, transaction => transaction.sender)
  senderTransactions: Transaction[];

  @OneToMany(() => Transaction, transaction => transaction.receiver)
  receiverTransactions: Transaction[];
}
