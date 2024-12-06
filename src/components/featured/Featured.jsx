"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Featured() {
    const featuredProducts = [
        {
            id: 1,
            name: "Wireless Earbuds",
            price: "$59.99",
            image: "/assets/products/product2.jpg", // Replace with your image path
            description: "Crystal-clear sound with noise cancellation.",
        },
        {
            id: 2,
            name: "Smartwatch",
            price: "$129.99",
            image: "/assets/products/product2.jpg", // Replace with your image path
            description: "Track your fitness and stay connected on the go.",
        },
        {
            id: 3,
            name: "Gaming Mouse",
            price: "$49.99",
            image: "/assets/products/product2.jpg", // Replace with your image path
            description: "High precision and ergonomic design for gamers.",
        },
    ];
    useEffect(() => {
        AOS.init({
            offset: 120,
            duration: 600,
            easing: "ease",
            once: true,
        });
    }, []);

    return (
        <section id="featured" className="py-12">
            <div data-aos="fade-up" className="container mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={400}
                                height={40}
                                className="object-cover rounded-md mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                {product.name}
                            </h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {product.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-xl font-bold text-gray-800">
                                    {product.price}
                                </span>
                                <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
