import { IsNotEmpty, IsEmail, IsDateString, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  telefono: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  deletedAt: Date;

  @IsBoolean()
  spettatore: boolean;

  @IsBoolean()
  streamer: boolean;

  @IsNotEmpty()
  @IsDateString()
  dataNascita: string;
}
