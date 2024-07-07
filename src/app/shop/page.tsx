"use client"
import { getAllProducts } from "@/services/fetch-products";
import { useEffect, useState } from "react";
import { TitleFont } from "@/lib/fonts";
import ProductCard from "./ProductCard";
import CartDrawer from "./CartDrawer";
import { cn } from "@/lib/utils";
import SkeletonCard from "./SkeletonCard";
import { Product } from "@prisma/client";

export interface CartItem {
    product: Product;
    quantity: number;
}

const ShopPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    // Cart state + functions
    const [cart, setCart] = useState<CartItem[]>([])
    const addToCart = (product: Product, amount: number) => {
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
            // remove from cart:
            setCart(cart.filter((item) => item.product.id !== productId));
        } else {
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
                <SkeletonCard amount={6} />
            ) : (
                <>
                    <div className="w-3/4 mb-20 flex justify-center gap-10 flex-wrap">
                        {
                            products.map((product, index) => (
                                <ProductCard key={index} product={product} addToCart={addToCart} />
                            ))
                        }
                    </div>
                    <CartDrawer cart={cart} updateCartQuantity={updateCartQuantity} />
                </>
            )}
        </div>
    );
};

export default ShopPage;