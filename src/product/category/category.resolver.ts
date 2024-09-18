import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategoryService } from './category.service';
import { CreateProductCategoryInput } from './input/create-category';

@Resolver()
export class ProductCategoryResolver {

    constructor(private categoryService: ProductCategoryService) { }
    @Mutation(() => String, { nullable: true })
    public async createProductCategory(@Args('createProductCategory') createData: CreateProductCategoryInput): Promise<string> {

        await this.categoryService.create(createData)
        console.log('createData', createData)
        return 'ok'
    }
}
