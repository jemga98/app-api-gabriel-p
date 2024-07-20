import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración del filtro de excepciones
  app.useGlobalFilters(new HttpExceptionFilter());

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API NestJS')
    .setDescription('Documentación de la API NestJS')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

    const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('API_DEVOPS', app, document);

  await app.listen(3000);
}
bootstrap();
