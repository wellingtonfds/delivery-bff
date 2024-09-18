import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ProductCategoryResolver } from './category.resolver';
import { ProductCategoryService } from './category.service';

@Module({
  imports: [DatabaseModule],
  providers: [ProductCategoryService, ProductCategoryResolver]
})
export class ProductCategoryModule { }
