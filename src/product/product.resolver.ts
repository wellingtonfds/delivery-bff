
import { Query, Resolver } from '@nestjs/graphql';


@Resolver()
export class ProductResolver {

    @Query(() => String)
    public async listProduct() {
        return 'teste'
    }



}