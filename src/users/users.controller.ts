// import { Controller } from '@nestjs/common';

// @Controller('users')
// export class UsersController {}





import { Controller, Get, Post, Body, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('Venta.Usuario')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll(): Promise<User[]> {
  //   return this.usersService.findAll();
  // }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(+id);
  }

  // @Post()
  // create(@Body() user: User): Promise<User> {
  //   return this.usersService.create(user);
  // }

  // @Post()
  // create(@Body() createUserDto: CreateUserDto): Promise<User> {
  //   return this.usersService.create(createUserDto);
  // }

  // @UseGuards(JwtAuthGuard)
  // @Delete(':id')
  // remove(@Param('id') id: string): Promise<void> {
  //   return this.usersService.remove(+id);
  // }
}