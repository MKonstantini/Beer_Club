"use client"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { toast } from "sonner"
import { Product } from "@prisma/client"

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product, amount: number) => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    const [amount, setAmount] = useState<number>(1)

    return (
        <div className="p-5 border bg-slate-100 rounded-lg shadow-md md:min-w96 relative">
            {
                product.isOnSale &&
                <div className="absolute -top-3 -right-3">
                    <p className="bg-slate-100 text-red-500 font-bold px-2 py-1 rounded-full shadow-md">SALE !</p>
                </div>
            }
            <h1 className="mb-5 font-bold bg-neutral-900 text-white p-2 rounded-full mx-10">{product.name.toUpperCase()}</h1>
            <div className="flex mx-2">
                <div className="w-3/4 text-start flex flex-col justify-between me-2 ms-2">
                    <div>
                        <p className="font-bold mb-1">{product.detail}</p>
                        <p className="italic">Price : ${product.price?.toString()}</p>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <p className="ms-1 mb-1">Amount :</p>
                            <div className="font-bold flex justify-center mb-2 align-middle text-center">
                                <button onClick={() => amount > 1 && setAmount(amount - 1)} className="bg-neutral-900 px-2 text-white rounded-s-full">-</button>
                                <p className="w-10 bg-white">{amount}</p>
                                <button onClick={() => amount < 12 && setAmount(amount + 1)} className="bg-neutral-900 px-2 text-white rounded-e-full">+</button>
                            </div>
                        </div>
                        <Button className="w-full mb-1  text-center" variant={"outline"} onClick={() => { addToCart(product, amount); toast("Item(s) added to cart.") }}>
                            <ShoppingCart className="me-3" />
                            Add To Cart
                        </Button>
                    </div>
                </div>
                <div className="w-1/4">
                    <Image src={product.img_reference ? product.img_reference : "/product_images/Bottle_Default.svg"} alt={'product img'} width={130} height={160} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard