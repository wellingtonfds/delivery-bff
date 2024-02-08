import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BigIntScalar } from "src/scalars";



@ObjectType()
export class CompanyData {


    @Field(() => BigIntScalar)
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