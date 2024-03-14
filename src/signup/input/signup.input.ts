import { Field, InputType } from "@nestjs/graphql";



@InputType()
export class SingUpInput {

    @Field()
    name: string

    @Field()
    companyName: string

    @Field()
    email: string

    @Field()
    password: string
}