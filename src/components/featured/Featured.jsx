"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Featured() {
    const featuredProducts = [
        {
            id: 1,
            name: "বাখুর বক্স",
            price: "৳ 450",
            image: "/assets/featured/bakhura.jpg", // Replace with your image path
            description: "Crystal-clear sound with noise cancellation.",
        },
        {
            id: 2,
            name: "বাখুর স্টিক",
            price: "৳ 160",
            image: "/assets/featured/bakhuraa.jpg", // Replace with your image path
            description: "মান ও ঘ্রানে ১০০%নিশ্চয়তা পাবেন আমাদের বাখুর স্টিকে",
        },
        {
            id: 3,
            name: "সাজাউধ",
            price: "৳ 450",
            image: "/assets/featured/sweetHome.jpg", // Replace with your image path
            description: "বিশুদ্ধ ঘ্রাণ আধ্যাত্মিক প্রশান্তি ঘরের সৌন্দর্য বাড়াতে অনন্য",
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
                <div className="text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Discover Our Exclusive Collection
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore the best deals on high-quality products tailored just for you. Upgrade your shopping experience with our carefully curated items.
                    </p>
                </div>
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
                                height={300} // Adjust to desired proportional height
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
