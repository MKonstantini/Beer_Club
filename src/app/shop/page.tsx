"use client"
import { getAllProducts } from "@/services/fetch-products";
import { useEffect, useState } from "react";
import { ProductType } from "@/services/fetch-products";
import ProductCard from "./ProductCard";
import { Archivo_Black } from "next/font/google";
import { cn } from "@/lib/utils";
import CartDrawer from "./CartDrawer";

const TitleFont = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

export interface CartItem {
    product: ProductType;
    quantity: number;
}

const ShopPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<ProductType[]>([]);

    const [cart, setCart] = useState<CartItem[]>([])
    const addToCart = (product: ProductType, amount: number) => {
        const existingItem = cart.find((item) => item.product.id === product.id);
        existingItem ?
            setCart(
                cart.map((item) =>
                    item.product.id === product.id ? { ...item, quantity: item.quantity + amount } : item
                )
            )
            : setCart([...cart, { product, quantity: amount }]);
    };
    const updateCartQuantity = (productId: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            // remove from cart if 0
            setCart(cart.filter((item) => item.product.id !== productId));
        } else {
            // update quantity for existing item
            setCart(
                cart.map((item) =>
                    item.product.id === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    const fetchData = async () => {
        const fetchedItems = await getAllProducts();
        setProducts(fetchedItems);
        setIsLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center text-center">
            <header className="mb-6 mt-10">
                <div className="mb-6 flex justify-center border shadow-sm p-2 px-12 bg-amber-400 rounded-full uppercase">
                    <p>Easy, Fast, Online</p>
                </div>
                <h1 className={cn("mb-6 text-5xl text-neutral-900", TitleFont.className)}>SHOP</h1>
            </header>
            {isLoading ? (
                <h1>Loading store...</h1>
            ) : (
                <>
                    <div className="w-3/4 mb-20 flex justify-center gap-10 flex-wrap">
                        {
                            products.map((product, index) => (
                                <ProductCard key={index} product={product} addToCart={addToCart} />
                            ))
                        }
                    </div>
                    <CartDrawer cart={cart} />
                </>
            )}
        </div>
    );
};

export default ShopPage;