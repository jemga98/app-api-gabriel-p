// src/productos/producto.entity.ts

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Venta.Producto')
export class Producto {
  @PrimaryGeneratedColumn({ name: 'IdProducto' })
  id: number;

  @Column({ name: 'Descripcion_Producto' })
  Descripcion: string;

  @Column({ name: 'Stock' })
  Stock: number;

  @Column({ name: 'Precio' })
  Precio: number;

  @Column({ name: 'User_Registro' })
  Usuario_Id: number;

  @Column({ name: 'Fecha_Creacion' })
  FechaRegistro: Date;
}