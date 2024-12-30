"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Card({ product, animation }) { // Accept animation as a prop
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 600,
      easing: "ease",
      once: true,
    });
  }, []);

  //button action
  // const handleAction = (action) => {
  //   switch (action.type) {
  //     case "addToCart":
  //       console.log("Adding to cart", action.payload);
  //       // Add your logic here
  //       break;
  //     case "buyNow":
  //       console.log("Buying now", action.payload);
  //       // Add your logic here
  //       break;
  //     case "wishlist":
  //       console.log("Adding to wishlist", action.payload);
  //       // Add your logic here
  //       break;
  //     default:
  //       console.log("Unknown action", action);
  //   }
  // };
console.log("get from card", product)
  return (
    <div
      data-aos={animation} // Apply the animation prop dynamically
      className="w-full h-[450px] mx-auto border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <a href={`/products/${product._id}`}>
        {/* Product Image */}
        <div className="relative h-60">
          <Image
            src={product.image} // Dynamically set product image
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
          {product.badges?.map((badge, i) => (
            <div
              key={i}
              style={{ backgroundColor: badge.color, top: `${i * 2 + 2}rem` }}
              className={`absolute left-2 bg-${badge.color}-500 text-white text-xs font-bold px-2 py-1 rounded-md`}
            >
              {badge.label}
            </div>
          ))}
        </div>

        {/* Product Info */}
        <div className="p-4 h-[150px] overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
          <p className="text-sm text-gray-500 mt-1 truncate">{product.description}</p>
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="text-gray-400 line-through text-sm">{product.price.original}৳</span>
              <span className="text-green-600 text-lg font-bold ml-2">{product.price.discounted}৳</span>
            </div>
            <div className="bg-yellow-100 text-yellow-600 text-xs font-medium px-2 py-1 rounded-full">
              {product.availability}
            </div>
          </div>
        </div>
      </a>
      {/* Action Buttons */}
      <a href={`/products/${product._id}`}>
        <div className="flex gap-2 px-2">
          {/* {product?.actions.map((action, i) => (
          <button
            key={i}
            style={{
              backgroundColor: action.color,
              color: "white",
            }}
            className="flex-1 text-sm font-semibold py-2 rounded-md hover:opacity-90 transition-opacity"
            onClick={() => handleAction(action)}
          >
            {action.label}
          </button>
        ))} */}

          <button className="flex-1 text-sm font-semibold py-2 rounded-md hover:opacity-90 transition-opacity text-white bg-blue-600">

            View Details

          </button>
        </div>
      </a>
    </div>
  );
}
