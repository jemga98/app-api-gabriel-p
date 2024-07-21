// src/auth/auth.controller.ts

import { Controller, Get, Query, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('auth')
@ApiTags("Inicio de sesión")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  // @Post('login')
  // async login(@Body() body: { username: string; password: string }) {
  //   const { username, password } = body;
  //   const user = await this.authService.validateUser(username, password);
  //   if (!user) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }
  //   return this.authService.login(user);
  // }

  @Get('login')
  @ApiOperation({ description: 'Ingrese su usuario y contraseña para generar token de inicio de sesión' })
  async login(@Query('username') username: string, @Query('password') password: string) {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Credenciales invalidas');
    }
    return this.authService.login(user);
  }
}