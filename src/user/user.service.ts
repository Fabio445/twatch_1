import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly user_repo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.user_repo.create(createUserDto);
    return await this.user_repo.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.user_repo.find();
  }

  async findOne(idUser: number): Promise<User> {
    return await this.user_repo.findOne(({ where: { idUser } }));
  }

  async update(idUser: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.user_repo.findOne(({ where: { idUser } }));

    if (!user) {
      // Handle user not found
      return null;
    }
    // Update user properties
    this.user_repo.merge(user, updateUserDto);
    return await this.user_repo.save(user);
  }

  async remove(idUser: number): Promise<boolean> {
    const user = await this.user_repo.findOne(({ where: { idUser } }));
    if (!user) {
      // Handle user not found
      return false;
    }

    await this.user_repo.remove(user);
    return true;
  }
}
