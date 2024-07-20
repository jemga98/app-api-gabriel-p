// src/usuarios/usuario.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Venta.Usuario') // Define el nombre de la tabla
export class Usuario {
  @PrimaryGeneratedColumn({ name: 'IdUsuario' })
  id: number;

  @Column({ name: 'NombreCompleto' })
  Nombre: string;

  @Column({ name: 'User' })
  username: string;

  @Column({ name: 'Clave' })
  password: string;

  @Column({ name: 'Rol_Id' })
  role: number;

  @Column({ name: 'Fecha_Registro' })
  FechaRegistro: Date;
}