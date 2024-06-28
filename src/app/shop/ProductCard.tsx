"use client"
import { ProductType } from "@/services/fetch-products"

const ProductCard = (Product: ProductType) => {
    return (
        <div>
            <h1>{Product.name}</h1>
            <h2>{Product.price.toString()}</h2>
        </div>
    )
}

export default ProductCard