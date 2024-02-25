import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductController } from './product.controller';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { QuestionModule } from './question/question.module';

@Module({
    imports: [DatabaseModule, QuestionModule],
    controllers: [ProductController],
    providers: [ProductService, ProductResolver]
})
export class ProductModule { }
