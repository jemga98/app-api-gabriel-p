import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidosService } from './pedidos.service';
import { PedidosController } from './pedidos.controller';
import { Pedido } from './pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pedido])],
  providers: [PedidosService],
  controllers: [PedidosController],
})
export class PedidosModule {}