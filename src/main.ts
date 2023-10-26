import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '127.0.0.1:3000',
        package: 'hero',
        protoPath: join(__dirname, 'hero/hero.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
