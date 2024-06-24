import { Body, Controller, Post, Res } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { Response } from 'express';
import { AUTH_COOKIE } from './constants';

export const LOGIN_TOKEN_ATTRIBUTES = {
  maxAge: 10 * 60 * 1000,
  domain: 'localhost',
};

export interface Login {
  username: string;
  password: string;
}

@Controller('api/login')
export class LoginController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async login(
    @Body() user: Login,
    @Res({ passthrough: true }) response: Response,
  ) {
    const res = await this.userService.login(user);
    response.cookie(AUTH_COOKIE, res, LOGIN_TOKEN_ATTRIBUTES);
    return { token: res };
  }
}
