import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from "@nestjs/core";

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private jwtService: JwtService, private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    const token = req.headers.authorization.split(' ')[1]
    const user = this.jwtService.verify(token)
    // TODO getHandler is?
    const role = this.reflector.get<string>('roles', context.getHandler())

    if (!role.includes(user.role)) {
      throw new ForbiddenException('Нет доступа!')
    }
    return true
  }
}
