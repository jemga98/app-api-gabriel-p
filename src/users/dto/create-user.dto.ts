// src/users/dto/create-user.dto.ts
import { IsString, IsInt, MinLength } from 'class-validator';

export class CreateUserDto {
  // @IsString()
  // name: string;

  @IsString()
  @MinLength(4)
  username: string;

  @IsString()
  @MinLength(8)
  password: string;

  // @IsInt()
  // roleId: number;
}