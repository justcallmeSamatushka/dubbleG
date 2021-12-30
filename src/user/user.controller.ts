import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UserService } from './user.service';
import { RoleGuard } from "../auth/guards/role.guard";
import { Roles } from "src/auth/decorators/role.decorator";

@Controller('users')
@UseGuards(JwtAuthGuard, RoleGuard)
export class UserController {

  constructor(private userService: UserService) {}

  @Get()
  @Roles('admin', 'manager')
  getAllUsers() {
    return this.userService.getAll();
  }

}
