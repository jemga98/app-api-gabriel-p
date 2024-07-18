// src/productos/productos.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidosService {
  constructor(
    @InjectRepository(Pedido)
    private pedidosRepository: Repository<Pedido>,
  ) {}

  findAll(): Promise<Pedido[]> {
    return this.pedidosRepository.find();
  }

  findOne(Id_pedido: number): Promise<Pedido> {
    return this.pedidosRepository.findOneBy({ Id_pedido });
  }

  create(pedido: Pedido): Promise<Pedido> {
    return this.pedidosRepository.save(pedido);
  }

  async update(Id_Pedido: number, pedido: Partial<Pedido>): Promise<Pedido> {
    await this.pedidosRepository.update(Id_Pedido, pedido);
    return this.findOne(Id_Pedido);
  }

  async remove(Id_Pedido: number): Promise<void> {
    await this.pedidosRepository.delete(Id_Pedido);
  }
}