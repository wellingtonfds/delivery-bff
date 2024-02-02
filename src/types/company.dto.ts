import { Field, ID, Int, ObjectType } from "@nestjs/graphql"

@ObjectType()
export class CompanyData {


    @Field(() => ID)
    id: bigint

    @Field()
    cnpj: string

    @Field()
    name: string

    @Field(() => String, { nullable: true })
    address: string

    @Field(() => String, { nullable: true })
    addressNumber: string

    @Field(() => String, { nullable: true })
    neighborhood: string

    @Field(() => String, { nullable: true })
    city: string

    @Field(() => Int, { nullable: true })
    postCode: number

    @Field(() => Date)
    createdAt: Date

    @Field(() => Date)
    updatedAt: Date
}