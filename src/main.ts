import { NestFactory } from '@nestjs/core';
import { RindegastosModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(RindegastosModule);
  await app.listen(3000);
}
bootstrap();
