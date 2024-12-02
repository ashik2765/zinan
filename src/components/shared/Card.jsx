import Image from 'next/image'
import React from 'react'

export default function Card({ product }) {
    console.log("from pro",product)


    return (
        <div className="max-w-sm w-full h-[450px] mx-auto border border-gray-300 rounded-lg shadow-lg bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
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

            {/* Action Buttons */}
            <div className="flex gap-2 p-4">
                {product?.actions.map((action, i) => (
                    <button
                        key={i}
                        style={{
                            backgroundColor: action.color,
                            color: 'white',
                        }}
                        className="flex-1 text-sm font-semibold py-2 rounded-md hover:opacity-90 transition-opacity"
                    >
                        {action.label}
                    </button>
                ))}
            </div>
        </div>

    )
}
