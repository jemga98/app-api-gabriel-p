// src/usuarios/usuarios.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.findOne(+id);
  }

  @Post()
  create(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuariosService.create(usuario);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.update(+id, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.usuariosService.remove(+id);
  }
}