import { Field, InputType, Int } from "@nestjs/graphql";
import { Validate } from "class-validator";
import { CNPJValidate } from "src/shared/validate/cnpj.validate";



@InputType()
export class CompanyCreateInput {

    @Field()
    @Validate(CNPJValidate)
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