import { IsOptional, IsNotEmpty, IsEmail, IsDateString, IsBoolean } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  username?: string;

  @IsOptional()
  @IsNotEmpty()
  password?: string;

  @IsOptional()
  @IsNotEmpty()
  telefono?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email?: string;

  @IsOptional()
  deletedAt?: Date;

  @IsOptional()
  @IsBoolean()
  spettatore?: boolean;

  @IsOptional()
  @IsBoolean()
  streamer?: boolean;

  @IsOptional()
  @IsNotEmpty()
  @IsDateString()
  dataNascita?: string;
}
