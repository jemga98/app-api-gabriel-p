import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Req, ForbiddenException } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { Pedido } from './pedido.entity';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { Request } from 'express';

@Controller('pedidos')
@ApiTags("Pedidos")
@ApiBearerAuth()
export class PedidosController {
  constructor(private readonly pedidosService: PedidosService) {}

  private checkRole(request: Request, allowedRoles: number[]): void {
    const user = request.user as any;
    if (!allowedRoles.includes(user.role)) {
      throw new ForbiddenException('No tienes permiso para acceder a este recurso');
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ description: 'Visualizar todos los pedidos' })
  findAll(): Promise<Pedido[]> {
    return this.pedidosService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ description: 'Visualizar pedido especifico, indicando el Id' })
  findOne(@Param('id') id: string): Promise<Pedido> {
    return this.pedidosService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ description: 'Agregar un nuevo pedido' })
  create(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidosService.create(pedido);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ description: 'Editar todos los registro del pedido especifico, indicando el Id' })
  update(@Param('id') id: string, @Body() pedido: Partial<Pedido>): Promise<Pedido> {
    return this.pedidosService.update(+id, pedido);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ description: 'Eliminar pedido especifico, indicando el Id' })
  remove(@Param('id') id: string): Promise<void> {
    return this.pedidosService.remove(+id);
  }
}