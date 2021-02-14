import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import * as bodyparser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.use(bodyparser.json());

  await app.listen(4000);
}
bootstrap();
