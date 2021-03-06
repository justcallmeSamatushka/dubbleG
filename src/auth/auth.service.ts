import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcryptjs'

import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserDto } from './dto/user-dto';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(dto: UserDto) {
    const user = await this.validateUser(dto)
    return this.generateToken(user)
  }

  async registration(dto: UserDto) {
    const candidate = await this.userService.findOne(dto.email);
    
    if (candidate) {
      throw new HttpException('Пользователь с таким email существует', HttpStatus.BAD_REQUEST);
    }
    
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userService.create({...dto, password: hashPassword})
    return this.generateToken(user)

  }

  private async generateToken(user: UserEntity) {
    const payload = {email: user.email, id: user.id, role: user.role}
    return {
        token: this.jwtService.sign(payload)
    }
  }

  private async validateUser(dto: UserDto) {
    const user = await this.userService.findOne(dto.email);
    if (!user) {
      throw new UnauthorizedException({message: 'Некорректный емайл'})
    }
    const passwordEquals = await bcrypt.compare(dto.password, user.password);
    if (passwordEquals) {
        return user;
    }
    throw new UnauthorizedException({message: 'Некорректный пароль'})
  }
}
