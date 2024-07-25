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

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, // Solo para desarrollo, desactiva en producción
  ssl: false, // Solo para desarrollo, desactiva en producción
};

export default config;