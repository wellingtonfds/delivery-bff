import { MediaDto } from "./media.dto"

export interface ProductDto {
    name: string
    value: number
    discount: number
    discountUntil: Date
    quantity: number
    sku: string
    brand: string
    media?: MediaDto[]
}