import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateProductCategoryInput } from './input/create-product-category';
import { ProductCategoryService } from './product-category.service';

@Resolver()
export class ProductCategoryResolver {

    constructor(private categoryService: ProductCategoryService) { }
    @Mutation(() => String, { nullable: true })
    public async createProductCategory(@Args('createProductCategory') createData: CreateProductCategoryInput): Promise<string> {

        console.log('createData', createData)
        return 'ok'
    }
}
