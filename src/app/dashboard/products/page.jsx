"use client"
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";
import { useState } from "react";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Product A", price: "$50", stock: 100 },
        { id: 2, name: "Product B", price: "$80", stock: 50 },
    ];

    const [editingProductId, setEditingProductId] = useState(null);

    const handleEditToggle = (id) => {
        setEditingProductId(editingProductId === id ? null : id);
    };

    const handleDelete = (id) => {
        // Implement delete logic here
        console.log(`Delete product with ID: ${id}`);
    };

    const handleUpdate = (id) => {
        // Implement update logic here
        console.log(`Update product with ID: ${id}`);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">All Products</h1>
            <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">Product ID</th>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Price</th>
                        <th className="px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-t">
                            <td className="px-4 py-2">{product.id}</td>
                            <td className="px-4 py-2">{product.name}</td>
                            <td className="px-4 py-2">{product.price}</td>
                            <td className="px-4 py-2 flex flex-col space-x-2">
                                {editingProductId === product.id ? (
                                    <>
                                        <button
                                            onClick={() => handleUpdate(product.id)}
                                            className="text-green-600 hover:text-green-800 px-2 py-1"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleEditToggle(product.id)}
                                            className="text-yellow-600 hover:text-yellow-800 px-2 py-1"
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => handleEditToggle(product.id)}
                                            className="text-blue-600 hover:text-blue-800 px-2 py-1"
                                        >
                                            <Link href="/dashboard/updateData">
                                                Edit
                                            </Link>

                                        </button>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="text-red-600 hover:text-red-800 px-2 py-1"
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end items-center pt-10">
                <Link href="/dashboard">
                    Go Back <span><GiReturnArrow className="text-red-600 text-2xl" /></span>
                </Link>
            </div>
        </div>
    );
}
