import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Access the ConfigService
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;

  // This enables CORS for all origins
  app.enableCors();
  
  await app.listen(port);
  console.log(`🚀 AIQ Backend is running on : http://localhost:${port}`);
}
bootstrap();
