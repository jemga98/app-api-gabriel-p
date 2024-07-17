// src/auth/auth.controller.ts

import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }



  // @Post('login')
  // async login(@Body() body: { username: string; password: string }) {
  //   const { username, password } = body;
  //   const user = await this.authService.validateUser(username, password);
  //   if (!user) {
  //     throw new UnauthorizedException('Invalid credentials');
  //   }
  //   // Aquí puedes generar un token JWT u otro método de sesión
  //   return { message: 'Login successful', user };
  // }
}