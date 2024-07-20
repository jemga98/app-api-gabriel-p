// src/usuarios/usuarios.service.ts

// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Usuario } from './usuario.entity';

// @Injectable()
// export class UsuariosService {
//   constructor(
//     @InjectRepository(Usuario)
//     private usuariosRepository: Repository<Usuario>,
//   ) {}

//   findAll(): Promise<Usuario[]> {
//     return this.usuariosRepository.find();
//   }

//   findOne(id: number): Promise<Usuario> {
//     return this.usuariosRepository.findOneBy({ id });
//   }

//   create(usuario: Usuario): Promise<Usuario> {
//     return this.usuariosRepository.save(usuario);
//   }

//   async update(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
//     await this.usuariosRepository.update(id, usuario);
//     return this.findOne(id);
//   }

//   async remove(id: number): Promise<void> {
//     await this.usuariosRepository.delete(id);
//   }
// }




import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import * as bcrypt from 'bcrypt';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  async findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOneBy({ id });
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const hashedPassword = await bcrypt.hash(createUsuarioDto.password, 10);
    const usuario = this.usuariosRepository.create({
      ...createUsuarioDto,
      password: hashedPassword,
    });
    return this.usuariosRepository.save(usuario);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    if (updateUsuarioDto.password) {
      const hashedPassword = await bcrypt.hash(updateUsuarioDto.password, 10);
      updateUsuarioDto.password = hashedPassword;
    }
    await this.usuariosRepository.update(id, updateUsuarioDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
}