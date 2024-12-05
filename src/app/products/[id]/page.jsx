import { products } from '@/lib/all-products';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "Details",
    description: "Product Details Page"
}

// Fetch product details
const getProductDetails = async (id) => {
    const res = await fetch(`${process.env.BASE_URL}/products/api/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch product details');
    }
    const product = await res.json();
    return product;
};

const DetailsPage = async ({ params }) => {
    const { id } = await params; // Await `params` to ensure it's accessible
    const productDetails = await getProductDetails(id);
    const product = productDetails?.product;

    return (
        <div className="font-sans mx-auto">
            <section
                className="relative w-full h-64 bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/banners/banner1.jpg')`
                }}
            >
                <div className="absolute inset-0 flex items-center justify-center text-white">
                    <h2 className="text-3xl font-bold">Product Details</h2>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-600 text-white">
                    Home/Product Details
                </div>
            </section>

            <main className="mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Content */}
                <div className="md:col-span-2 p-4 md:p-0 space-y-6">
                    <Image src={product?.image} alt="Product Image" width={400} height={300} className="rounded-lg" />
                    <h3 className="text-2xl font-bold">{product?.name}</h3>
                    <p className="text-gray-700">{product?.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {products?.map((item, index) => (
                            <div key={index} className=" flex flex-col  p-4 border border-red-500 rounded-lg">
                                <h4 className="font-semibold">{item?.name}</h4>
                                <p className="text-gray-500">{item?.description}.</p>
                            </div>
                        ))}
                    </div>

                    <h4 className="text-xl font-bold mt-8">Delivery Process</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {['STEP ONE', 'STEP TWO', 'STEP THREE'].map((step, index) => (
                            <div key={step} className="p-4 text-center border rounded-lg">
                                <div className="text-3xl font-bold text-red-500">{index + 1}</div>
                                <h5 className="mt-2 font-semibold">{step}</h5>
                                <p className="text-gray-500">Delivery in 7days</p>
                            </div>
                        ))}
                    </div>

                    <Image src="/assets/products/product4.jpg" alt="Mechanic" width={400} height={400} className="rounded-lg mt-8" />
                </div>

                {/* Right Sidebar */}
                <aside className="space-y-6">
                    <div className="bg-gray-100 p-6 rounded-lg">
                        <h4 className="text-xl font-bold">Our Products</h4>
                        {products?.map((item, index) => (
                            <a key={index} href="#" className="block py-2 text-red-500 hover:underline">
                                {item?.name}
                            </a>
                        ))}
                    </div>

                    <div className="p-6 bg-gray-800 text-white rounded-lg">
                        <h4 className="text-xl font-bold">Contact Us</h4>
                        <a href="#" className="block mt-4 py-2 bg-blue-600 hover:bg-blue-700 duration-300 text-center rounded-md">
                            WhatsApp
                        </a>
                        <a href="#" className="block mt-4 py-2 bg-blue-600 hover:bg-blue-700 duration-300 text-center rounded-md">
                            Messenger
                        </a>
                    </div>

                    <div className="p-6 bg-black text-white rounded-lg">
                        <h4 className="text-xl font-bold">Shaja-s-oud</h4>
                        <p>Need Help? We Are Here To Help You</p>
                        <p className="mt-4 text-red-500 font-bold">Save up to 60% off</p>
                        <a href="#" className="block mt-4 py-2 bg-blue-600 hover:bg-blue-700 duration-300 text-center rounded-md">
                            Get A Quote
                        </a>
                    </div>

                    <div className="p-6 bg-white border rounded-lg">
                        <p className="text-2xl font-bold">Price</p>
                        <button className="mt-4 w-full py-2 text-white bg-blue-600 hover:bg-blue-700 duration-300 rounded-md">Proceed Checkout</button>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default DetailsPage;
