import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 20 })
  telefono: string;

  @Column({ length: 40 })
  email: string;

  @Column({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @Column({ default: true })
  spettatore: boolean;

  @Column({ default: false })
  streamer: boolean;

  @Column({ type: 'date' })
  dataNascita: Date;
}
