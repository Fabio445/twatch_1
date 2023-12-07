import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PrivateChat {
  @PrimaryGeneratedColumn()
  idChat: number;

  @Column({ length: 255 })
  chatName: string;
}