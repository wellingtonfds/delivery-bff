import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaClientExceptionFilter } from './filter/prisma-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())

  app.enableCors({
    origin: true
  })
  app.useGlobalFilters(new PrismaClientExceptionFilter());

  await app.listen(3000)
}
bootstrap()
