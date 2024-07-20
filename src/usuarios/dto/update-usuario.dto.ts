// src/usuarios/dto/update-usuario.dto.ts
import { IsString, MinLength, IsOptional } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @MinLength(8)
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  Nombre?: string;

  @IsOptional()
  role?: number;

  @IsOptional()
  FechaRegistro?: Date;
}