// src/productos/productos.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { Producto } from './producto.entity';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';

@Controller('productos')
@ApiTags("Productos")
@ApiBearerAuth()
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ description: 'Obtener todos los productos' })
  findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ description: 'Obtener producto especifico, indicando el Id' })
  findOne(@Param('id') id: string): Promise<Producto> {
    return this.productosService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ description: 'Crear un nuevo registro de producto' })
  create(@Body() producto: Producto): Promise<Producto> {
    return this.productosService.create(producto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ description: 'Editar todos los datos del producto, indicando el Id' })
  update(@Param('id') id: string, @Body() producto: Partial<Producto>): Promise<Producto> {
    return this.productosService.update(+id, producto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ description: 'Eliminar un producto especifo, indicando el Id' })
  remove(@Param('id') id: string): Promise<void> {
    return this.productosService.remove(+id);
  }
}