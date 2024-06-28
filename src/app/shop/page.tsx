"use client"
import { getAllProducts } from "@/services/fetch-products";
import { useEffect, useState } from "react";
import { ProductType } from "@/services/fetch-products";
import ProductCard from "./ProductCard";
import { Archivo_Black } from "next/font/google";
import { cn } from "@/lib/utils";

const TitleFont = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

const ShopPage = () => {
    const [products, setProducts] = useState<ProductType[]>([])
    const fetchData = async () => {
        const fetchedItems = await getAllProducts();
        setProducts(fetchedItems);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center mt-10 text-center">
            <header className="mb-6">
                <h2 className="mb-4">Easy & Online</h2>
                <h1 className={cn("mb-6 text-5xl text-neutral-900", TitleFont.className)}>SHOP</h1>
            </header>
            {products.length > 0 ?
                (
                    ProductCard(products[5])
                ) :
                (
                    <h1>No shop items yet.</h1>
                )}
        </div>
    );
};

export default ShopPage;