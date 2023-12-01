import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Brand {

    @Prop()
    name: string

    @Prop()
    fantasyName: string
}