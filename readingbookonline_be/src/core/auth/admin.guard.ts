import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserResponseDto } from '@features/user/dto/get-user-response.dto';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user: UserResponseDto = request.user;

    if (!user || user.role?.name !== 'ADMIN') {
      throw new ForbiddenException('Bạn không có quyền truy cập');
    }

    return true;
  }
}
