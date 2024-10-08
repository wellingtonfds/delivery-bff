import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { BigIntScalar } from '../../scalars';


@InputType()
export class CreateProductDto {

    @Field(() => BigIntScalar)
    productCategoryId: bigint

    @Field()
    name: string

    @Field(() => Float)
    value: number

    @Field(() => Float)
    discount: number

    @Field(() => String)
    description: string

    @Field(() => String)
    smallDescription: string

    @Field(() => Date, { nullable: true })
    discountUntil: Date

    @Field(() => Int, { nullable: true })
    quantity: number

    @Field(() => String, { nullable: true })
    sku: string

    @Field(() => Boolean, { nullable: true })
    publish?: boolean

}