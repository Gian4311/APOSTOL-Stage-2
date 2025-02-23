import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// 1. Migration command used to create the database:
//         npx prisma migrate dev --name "init"
// 2. Command to seed the database:
//         npx prisma db seed
// - More notes in README.md
