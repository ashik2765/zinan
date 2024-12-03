import React from 'react';
import Card from '../shared/Card';

const products = [
    {
        id: 1,
        name: "ওউদ ধূপকাঠি বা বখুর স্টিক",
        description: "🌿 বিশুদ্ধ ঘ্রাণ🕌 আধ্যাত্মিক প্রশান্তি🏡 ঘরের সৌন্দর্য বাড়াতে অনন্য",
        image: "/assets/products/product1.jpg",
        price: {
            original: 1950,
            discounted: 1300,
        },
        badges: [
            { type: "sale", label: "SALE", color: "green" },
            { type: "new", label: "New", color: "yellow" },
        ],
        availability: "In Stock",
        actions: [
            { label: "Add to Cart", color: "blue", url: "/cart" },
            { label: "Buy Now", color: "blue", url: "/checkout" },
        ],
    },
    {
        id: 2,
        name: "আতর - খাঁটি সৌরভের স্পর্শ",
        description: "🌸 দীর্ঘস্থায়ী ঘ্রাণ🌿 খাঁটি ও অ্যালকোহলমুক্ত✨ প্রতিদিনের ব্যবহার ও উপহার দেওয়ার জন্য আদর্শ.",
        image: "/assets/products/product2.jpg",
        price: {
            original: 850,
            discounted: 750,
        },
        badges: [{ type: "offer", label: "Limited Offer", color: "orange" }],
        availability: "In Stock",
        actions: [
            { label: "Add to Cart", color: "blue", url: "/cart" },
            { label: "Buy Now", color: "blue", url: "/checkout" },
        ],
    },
    {
        id: 3,
        name: "বাখুর স্টিকে",
        description: "মান ও ঘ্রানে ১০০%নিশ্চয়তা পাবেন আমাদের বাখুর স্টিকে,, তাই জলদি অর্ডার করে ফেলুন,,আপনার ফোন নং, ঠিকানা দিয়ে,, ইনবক্স করে ফেলে এখনি",
        image: "/assets/products/product3.jpg",
        price: {
            original: 400,
            discounted: 350,
        },
        badges: [{ type: "bestseller", label: "Bestseller", color: "red" }],
        availability: "Out of Stock",
        actions: [{ label: "Notify Me", color: "blue", url: "/notify" }],
    },
    {
        id: 4,
        name: "এরাবিয়ান মুখাল্লাত রৌজ",
        description: "যাদের চন্দন, রৌজ ফ্লেভার পছন্দ তাদের জন্য সবচেয়ে বেস্ট একটি আতর। পেইজের কাস্টমার রিভিউ কমেন্ট দেখেন বুঝতে পারবেন।",
        image: "/assets/products/product4.jpg",
        price: {
            original: 600,
            discounted: 500,
        },
        badges: [
            { type: "hot", label: "HOT", color: "red" },
            { type: "eco-friendly", label: "Eco Friendly", color: "green" },
        ],
        availability: "In Stock",
        actions: [
            { label: "Add to Cart", color: "blue", url: "/cart" },
            { label: "Buy Now", color: "blue", url: "/checkout" },
        ],
    },
];

export default function Products() {
    return (
        <div>
            <div className="my-5">
                <h1 className="text-center text-2xl font-bold">Our Products</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
               {
                products.map((product)=>(
                    <Card product={product} key={product.id}/>
                ))
               }
            </div>
        </div>
    );
}
