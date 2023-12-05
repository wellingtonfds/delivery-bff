
import * as mongoose from 'mongoose'

export type ProductDocument = mongoose.HydratedDocument<Product>


export class Product {

    name: string

    value: number

    discount: number

    discountUntil: Date

    quantity: number

    sku: string

    brand: string

    createdAt: Date

    updatedAt: Date

    // @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }] })
    // media: Media[]
}

