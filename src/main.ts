import { NestFactory } from '@nestjs/core';
import { AppModule } from 'server/app.module';
import { NextService } from 'server/next/next.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const nextService = app.get(NextService);
  await nextService.prepare();
  await app.listen(3000);
}
bootstrap();
