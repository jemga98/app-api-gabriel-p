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
  host: process.env.DATABASE_HOST || 'rsd-dbboulfire.c94u4wmmikvo.us-east-2.rds.amazonaws.com',       // Cambia a la dirección de tu servidor PostgreSQL
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,              // Puerto por defecto de PostgreSQL
  username: process.env.DATABASE_USERNAME || 'postgres',  // Reemplaza con tu nombre de usuario de PostgreSQL
  password: process.env.DATABASE_PASSWORD || 'psgl#12jg&df90', // Reemplaza con tu contraseña de PostgreSQL
  database: process.env.DATABASE_NAME || 'boulfire', // Reemplaza con el nombre de tu base de datos
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, // Solo para desarrollo, desactiva en producción
};

export default config;