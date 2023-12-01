import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import * as mongoose from 'mongoose'

export type ProductDocument = mongoose.HydratedDocument<Product>

@Schema({ timestamps: true })
export class Product {

    @Prop()
    name: string

    @Prop()
    value: number

    @Prop()
    discount: number

    @Prop()
    discountUntil: Date

    @Prop()
    quantity: number

    @Prop()
    sku: string

    @Prop()
    brand: string

    @Prop()
    createdAt: Date

    @Prop()
    updatedAt: Date

    // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }] })
    // media: Media[]
}

export const ProductSchema = SchemaFactory.createForClass(Product)