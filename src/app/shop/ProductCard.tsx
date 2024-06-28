"use client"
import { ProductType } from "@/services/fetch-products"
import Image from "next/image"

const ProductCard = (product: ProductType) => {
    return (
        <div className="p-5 bg-slate-200 rounded-md text-white w-1/4">
            <h1>{product.name}</h1>
            <h2>{product.price.toString()}</h2>
            <Image src={product.img_reference ? product.img_reference : "/product_images/BC_Bottle_Default.svg"} alt={product.name + ' Img'} width={50} height={50} />
        </div>
    )
}

export default ProductCard