import { Field, InputType, Int } from "@nestjs/graphql"

@InputType()
export class CompanyCreateDTO {

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
}