import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LOGIN_TOKEN_ATTRIBUTES } from '../login.controller';
import { AUTH_COOKIE } from '../constants';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const auth = req.cookies[AUTH_COOKIE];
    if (auth) {
      res.cookie(AUTH_COOKIE, auth, LOGIN_TOKEN_ATTRIBUTES);
      next();
    } else {
      res.status(401).json({ msg: 'User need to log in' });
    }
  }
}
