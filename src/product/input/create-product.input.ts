import { Field, Float, InputType, Int } from "@nestjs/graphql";



@InputType()
export class CreateProductInput {

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