import React from 'react';
import Card from '../shared/Card';

const getProductsData = async () => {
    const res = await fetch(`${process.env.BASE_URL}/products/api/get-all`)
    const products = res.json()
    return products
}


const Products = async () => {
    const productsData = await getProductsData();
    const products = productsData.products

    return (
        <div>
            <div className="my-5">
                <h1 className="text-center text-2xl font-bold">Our Products</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
                {
                    products.map((product, index) => (
                        <Card product={product} key={product.id} animation={index % 3 === 0 ? "fade-left" : index % 3 === 1 ? "fade-up" : "fade-right"} />
                    ))
                }
            </div>
        </div>
    );
}
export default Products
