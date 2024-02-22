import { Field, InputType } from "@nestjs/graphql";
import { BigIntScalar } from "src/scalars";



@InputType()
export class CreateProductCategoryInput {

    @Field()
    name: string

    @Field()
    description: string

    @Field(() => BigIntScalar)
    companyId: BigInt

}