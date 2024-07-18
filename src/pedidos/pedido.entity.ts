import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Venta.Pedidos')
export class Pedido {
  @PrimaryGeneratedColumn({ name: 'IdPedido' })
  Id_pedido: number;

  @Column({ name: 'Producto' })
  Descripcion_Producto: string;

  @Column({ name: 'Precio' })
  Precio: number;

  @Column({ name: 'Cantidad' })
  Cantidad: number;

  @Column({ name: 'Total' })
  Total: number;

  @Column({ name: 'Id_Cliente' })
  Id_Cliente: number;

  @Column({ name: 'Fecha_Creacion' })
  FechaRegistro: Date;
}