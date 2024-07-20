// src/usuarios/dto/create-usuario.dto.ts
import { IsString, MinLength, IsOptional } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @MinLength(4)
  username: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @IsOptional()
  Nombre?: string;

  @IsOptional()
  role?: number;

  @IsOptional()
  FechaRegistro?: Date;
}