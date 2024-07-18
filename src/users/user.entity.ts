import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Venta.Usuario') // Define el nombre de la tabla
export class User {
  @PrimaryGeneratedColumn({ name: 'IdUsuario' })
  id: number;

  @Column({ name: 'NombreCompleto' })
  name: string;

  @Column({ name: 'User' })
  username: string;

  @Column({ name: 'Clave' })
  password: string;
  
  @Column({ name: 'Rol_Id' })
  roleId: number;

  @Column({ name: 'Fecha_Registro' })
  registrationDate: Date;
}