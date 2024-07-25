// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// const config: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',       // Cambia a la dirección de tu servidor PostgreSQL
//   port: 5432,              // Puerto por defecto de PostgreSQL
//   username: 'postgres',  // Reemplaza con tu nombre de usuario de PostgreSQL
//   password: 'jagbp@devs11', // Reemplaza con tu contraseña de PostgreSQL
//   database: 'BoulFire', // Reemplaza con el nombre de tu base de datos
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: false, // Solo para desarrollo, desactiva en producción
// };

// export default config;


//



import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

// const config: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'boulfire.c94u4wmmikvo.us-east-2.rds.amazonaws.com',
//   port: 5432,
//   username: 'postgres',
//   password: 'psgl#12jg&df90',
//   database: 'boulfire',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: false,
//   ssl: {
//     rejectUnauthorized: false, // Cambia a true si deseas validar el certificado SSL del servidor
//   },
// };


dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME || 'postgres',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  ssl: {
    rejectUnauthorized: false, // Cambia a true si deseas validar el certificado SSL del servidor
  },
};

export default config;