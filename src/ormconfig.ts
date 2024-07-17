import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',       // Cambia a la dirección de tu servidor PostgreSQL
  port: 5432,              // Puerto por defecto de PostgreSQL
  username: 'postgres',  // Reemplaza con tu nombre de usuario de PostgreSQL
  password: 'jagbp@devs11', // Reemplaza con tu contraseña de PostgreSQL
  database: 'BoulFire', // Reemplaza con el nombre de tu base de datos
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, // Solo para desarrollo, desactiva en producción
};

export default config;