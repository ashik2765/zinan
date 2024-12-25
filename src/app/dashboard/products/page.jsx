"use client"
import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";

export default function ProductsPage() {
    const products = [
        { id: 1, name: "Product A", price: "$50", stock: 100 },
        { id: 2, name: "Product B", price: "$80", stock: 50 },
    ];

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
                                <div className="dropdown dropdown-hover dropdown-left">
                                    <div tabIndex={0} role="button" className="btn m-1">Action</div>
                                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                        <li>
                                            <button
                                                className="text-green-600 hover:text-green-800 px-2 py-1"
                                            >
                                                <Link href="/dashboard/updateData">
                                                    Edit
                                                </Link>
                                            </button>
                                        </li>
                                        <li>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="text-red-600 hover:text-red-800 px-2 py-1"
                                            >
                                                Delete
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-end items-center pt-10 text-red-600">
                <Link href="/dashboard">
                    Go Back <span><GiReturnArrow className="text-red-600 text-2xl" /></span>
                </Link>
            </div>
        </div>
    );
}
