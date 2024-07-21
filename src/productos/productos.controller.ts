// src/productos/productos.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './producto.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('productos')
@ApiTags("Productos")
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get()
  @ApiOperation({ description: 'Obtener todos los productos' })
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Obtener producto especifico, indicando el Id' })
  findOne(@Param('id') id: string): Promise<Producto> {
    return this.productosService.findOne(+id);
  }

  @Post()
  @ApiOperation({ description: 'Crear un nuevo registro de producto' })
  create(@Body() producto: Producto): Promise<Producto> {
    return this.productosService.create(producto);
  }

  @Put(':id')
  @ApiOperation({ description: 'Editar todos los datos del producto, indicando el Id' })
  update(@Param('id') id: string, @Body() producto: Partial<Producto>): Promise<Producto> {
    return this.productosService.update(+id, producto);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Eliminar un producto especifo, indicando el Id' })
  remove(@Param('id') id: string): Promise<void> {
    return this.productosService.remove(+id);
  }
}