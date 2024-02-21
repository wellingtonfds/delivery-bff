
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './input/create-product.input';


@Resolver()
export class ProductResolver {

    @Query(() => String)
    public async listProduct() {
        return 'teste'
    }

    @Mutation(() => String, { nullable: true })
    public async createProduct(@Args('product') companyCreate: CreateProductInput): Promise<string> {
        console.log('companyCreate', companyCreate)
        return 'ok'
    }
}