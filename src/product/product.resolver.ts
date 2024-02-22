
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './input/create-product.input';
import { ProductService } from './product.service';


@Resolver()
export class ProductResolver {

    constructor(private productService: ProductService) { }

    @Query(() => String)
    public async listProduct() {
        return 'teste'
    }

    @Mutation(() => String, { nullable: true })
    public async createProduct(@Args('product') companyCreate: CreateProductInput): Promise<string> {
        console.log('companyCreate', companyCreate)
        await this.productService.create(companyCreate)
        return 'ok'
    }
}