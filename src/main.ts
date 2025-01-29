import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
console.log("DATABASE_HOST: ", process.env.DATABASE_HOST);
  // Enable CORS (Cross-Origin Resource Sharing)
  app.enableCors();

  // Use global validation pipes for DTO validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strip out properties that are not in DTO
      forbidNonWhitelisted: true, // Reject requests with unknown properties
      transform: true, // Automatically transform payloads to DTO instances
    }),
  );

  // Start the application on port 3000
  await app.listen(3000);
  console.log(`🚀 Server is running on: http://localhost:3000`);
}
bootstrap();
