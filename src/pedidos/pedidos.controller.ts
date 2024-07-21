import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Pedido } from './pedido.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('pedidos')
@ApiTags("Pedidos")
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  @Get()
  @ApiOperation({ description: 'Visualizar todos los pedidos' })
  findAll(): Promise<Pedido[]> {
    return this.pedidosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ description: 'Visualizar pedido especifico, indicando el Id' })
  findOne(@Param('id') id: string): Promise<Pedido> {
    return this.pedidosService.findOne(+id);
  }

  @Post()
  @ApiOperation({ description: 'Agregar un nuevo pedido' })
  create(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidosService.create(pedido);
  }

  @Put(':id')
  @ApiOperation({ description: 'Editar todos los registro del pedido especifico, indicando el Id' })
  update(@Param('id') id: string, @Body() pedido: Partial<Pedido>): Promise<Pedido> {
    return this.pedidosService.update(+id, pedido);
  }

  @Delete(':id')
  @ApiOperation({ description: 'Eliminar pedido especifico, indicando el Id' })
  remove(@Param('id') id: string): Promise<void> {
    return this.pedidosService.remove(+id);
  }
}