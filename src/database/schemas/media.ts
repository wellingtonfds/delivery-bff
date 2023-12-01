import { Prop, Schema } from "@nestjs/mongoose";

@Schema({ timestamps: true })
export class Media {

    @Prop()
    filename: string

    @Prop()
    pathUrl: string

    @Prop()
    type: string

}