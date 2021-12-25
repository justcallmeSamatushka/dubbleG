import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDto } from 'src/auth/dto/user-dto';
import { getRepository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserRepo } from './repo/user-repo';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepo) {}

  async findOne(email: string) {
    return await this.userRepo.findOne({
      where: { email }
    })
  }

  async create(dto: UserDto) {
    const user = await this.userRepo.save(dto)
    console.log(user);
    return user;
    
  }

  async getAll() {
    // return await this.userRepo.findAndCount()
    const users = await getRepository(UserEntity).createQueryBuilder('user')
      .select(['user.id', 'user.name', 'user.email', 'user.role', 'user.status'])
      .getMany();
     
    const count = await getRepository(UserEntity).createQueryBuilder('user')
      .getCount()
    return {
      count,
      users
    }
  }

}
