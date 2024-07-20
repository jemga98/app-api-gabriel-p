import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service'; // Asume que tienes un UsersService para interactuar con la base de datos
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.entity'; // Asume que tienes una entidad User definida
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.findByUsername(username);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: User) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}