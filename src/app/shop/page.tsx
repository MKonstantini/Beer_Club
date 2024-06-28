"use client"
import { getAllProducts } from "@/services/fetch-products";
import { useEffect, useState } from "react";
import { ProductType } from "@/services/fetch-products";
import ProductCard from "./ProductCard";

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
        <div>
            {products.length > 0 ?
                (
                    ProductCard(products[0])
                ) :
                (
                    <h1>No shop items yet.</h1>
                )}
        </div>
    );
};

export default ShopPage;