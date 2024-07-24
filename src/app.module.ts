// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UsersModule } from './users/users.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import config from './ormconfig';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot(config),
//     UsersModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}




import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { PedidosModule } from './pedidos/pedidos.module'
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import config from './ormconfig';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot(config),
//     UsuariosModule,
//     ProductosModule,
//     PedidosModule,
//     UsersModule,
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}





//despligue para la nube

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(config),
    UsuariosModule,
    ProductosModule,
    PedidosModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}