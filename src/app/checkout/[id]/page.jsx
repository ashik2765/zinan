'use client';

import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
    const { id } = useParams(); // Get `id` from the URL
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        phone: "",
    });

    const [cartItems] = useState([
        { id: 1, name: "Product A", price: 200, quantity: 2 },
        { id: 2, name: "Product B", price: 150, quantity: 1 },
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                `/checkout/api/new-checkout`, // Correct API endpoint
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id, customerInfo: formData, cartItems }),
                }
            );

            if (response.ok) {
                router.push(`/thank-you/${id}`); // Navigate to Thank You page with `id`
            } else {
                console.error("Checkout failed:", response.statusText);
            }
        } catch (error) {
            console.error("Error during checkout:", error);
        }
    };

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Checkout</h1>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Customer Information Form */}
                <form
                    className="bg-white shadow-md rounded-lg p-6 space-y-4"
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-xl font-semibold">Customer Information</h2>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium">
                            Address
                        </label>
                        <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows="3"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium">
                            Phone Number
                        </label>
                        <input
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        Place Order
                    </button>
                </form>

                {/* Order Summary */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    <ul className="space-y-2">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between border-b pb-2 last:border-none"
                            >
                                <span>{item.name} (x{item.quantity})</span>
                                <span>${item.price * item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-4 border-t pt-4 flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${calculateTotal()}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
