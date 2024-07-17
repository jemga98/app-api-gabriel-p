// src/productos/productos.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private productosRepository: Repository<Producto>,
  ) {}

  findAll(): Promise<Producto[]> {
    return this.productosRepository.find();
  }

  findOne(id: number): Promise<Producto> {
    return this.productosRepository.findOneBy({ id });
  }

  create(producto: Producto): Promise<Producto> {
    return this.productosRepository.save(producto);
  }

  async update(id: number, producto: Partial<Producto>): Promise<Producto> {
    await this.productosRepository.update(id, producto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productosRepository.delete(id);
  }
}