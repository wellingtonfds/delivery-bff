import { Field, Float, Int } from "@nestjs/graphql";
import { BigIntScalar } from '../../scalars';

export class UpdateProductDto {

    @Field(() => BigIntScalar)
    id: bigint

    @Field(() => BigIntScalar, { nullable: true })
    productCategoryId: bigint

    @Field({ nullable: true })
    name: string

    @Field(() => Float, { nullable: true })
    value: number

    @Field(() => Float, { nullable: true })
    discount: number

    @Field(() => String, { nullable: true })
    description: string

    @Field(() => String, { nullable: true })
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