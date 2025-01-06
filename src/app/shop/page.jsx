import Card from "@/components/shared/Card";
import React from "react";
const getProductsData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/api/get-all`)
    const products = res.json()
    return products
}


const ShopPage = async () => {
    const productsData = await getProductsData();
    const products = productsData.products
    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Shop</h1>
                    <p className="text-lg">
                        Discover quality products at competitive prices.
                    </p>
                </div>
            </section>

            {/* Product Listing */}
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        products.map((product, index) => (
                            <Card product={product} key={product.id} animation={index % 3 === 0 ? "fade-left" : index % 3 === 1 ? "fade-up" : "fade-right"} />
                        ))
                    }
                </div>
            </section>

            {/* Footer CTA */}
            <section className="bg-blue-600 text-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl font-bold mb-4">Don’t Miss Out on Great Deals!</h2>
                    <p className="mb-6">Upgrade your shopping experience with us today.</p>
                    <a
                        href="/cart"
                        className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
                    >
                        View Cart
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ShopPage;
