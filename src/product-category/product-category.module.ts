import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductCategoryResolver } from './product-category.resolver';
import { ProductCategoryService } from './product-category.service';

@Module({
  imports: [DatabaseModule],
  providers: [ProductCategoryService, ProductCategoryResolver]
})
export class ProductCategoryModule { }
