
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';


@Resolver()
export class ProductResolver {

    constructor(private productService: ProductService) { }

    @Query(() => String)
    public async listProduct() {
        return 'teste'
    }

    @Mutation(() => String, { nullable: true })
    public async createProduct(@Args('product') companyCreate: CreateProductDto): Promise<string> {
        console.log('companyCreate', companyCreate)
        await this.productService.create(companyCreate)
        return 'ok'
    }
}