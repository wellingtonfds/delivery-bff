import { Field, Int, ObjectType } from "@nestjs/graphql"
import { Decimal } from "@prisma/client/runtime/library"

@ObjectType()
export class ProductData {

    @Field(() => Int)
    id: number

    @Field()
    name: string

    @Field(() => Decimal)
    value: number

    @Field(() => Decimal)
    discount: number

    @Field()
    description: string

    @Field()
    smallDescription: string

    @Field(() => Date)
    discountUntil: Date

    @Field()
    photo: string

    @Field()
    thumb: string

    @Field(() => Int)
    quantity: number

    @Field(() => Date)
    publish?: Date

    @Field(() => Date)
    createAt: Date

    @Field(() => Date)
    updateAt: Date

}