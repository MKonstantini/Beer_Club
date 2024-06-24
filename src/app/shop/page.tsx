"use client"
import { getAllProducts } from "@/services/fetch-products";
import { useEffect, useState } from "react";
import { ProductType } from "@/services/fetch-products";

const ShopPage = () => {
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const fetchedItems = await getAllProducts();
            setProducts(fetchedItems);
        };

        fetchData();
        console.log(products)
    }, []);

    return (
        <div>
            {products.length > 0 ? (
                <p>{products[0].name}</p>
            ) : (
                <h1>No shop items yet.</h1>
            )}
        </div>
    );
};

export default ShopPage;

