// src/usuarios/usuarios.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('usuarios')
@ApiTags("Usuarios")
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  @ApiOperation({ description: 'Obtener todos los usuarios' })
  findAll(): Promise<Usuario[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Obtener usuario especifico, indicando el Id' })
  findOne(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.findOne(+id);
  }

  // @Post()
  // create(@Body() usuario: Usuario): Promise<Usuario> {
  //   return this.usuariosService.create(usuario);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() usuario: Partial<Usuario>): Promise<Usuario> {
  //   return this.usuariosService.update(+id, usuario);
  // }

  @Post()
  @ApiOperation({ description: 'Agregar un nuevo registro de usuario' })
  create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return this.usuariosService.create(createUsuarioDto);
  }

  @Put(':id')
  @ApiOperation({ description: 'Editar todos los datos del usuario especifico, indicando el Id' })
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Eliminar un usuario especifico, indicando el Id' })
  remove(@Param('id') id: string): Promise<void> {
    return this.usuariosService.remove(+id);
  }
}