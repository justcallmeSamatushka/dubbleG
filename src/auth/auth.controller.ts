import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDto } from './dto/user-dto';

@Controller('users')
export class AuthController {

  constructor(private authService: AuthService){}

  @Post('/signup')
  registration(@Body() dto: UserDto) {
    return this.authService.registration(dto);
  }

  @Post('/signin')
  login(@Body() dto: UserDto) {
    return this.authService.login(dto)

  }
}
