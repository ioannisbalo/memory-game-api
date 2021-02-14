import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import * as bodyparser from 'body-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(bodyparser.json());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(4000);
}
bootstrap();
