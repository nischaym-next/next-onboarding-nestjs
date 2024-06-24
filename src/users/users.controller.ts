import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() user: Omit<User, 'id'>) {
    return this.userService.addOne(user);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
