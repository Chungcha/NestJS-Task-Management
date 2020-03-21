import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  //server listens to this port.  Listen is an Express method.
}
bootstrap();
//a new instance of nest is being created
