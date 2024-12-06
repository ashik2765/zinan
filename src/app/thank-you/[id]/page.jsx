'use client';

import { useParams } from 'next/navigation';

export default function ThankYouPage() {
    const { id } = useParams(); // Dynamically get the order ID from the URL

    return (
        <div className="container mx-auto p-6 text-center">
            <div className="bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-green-600 mb-4">
                    Thank You for Your Order!
                </h1>
                <p className="text-gray-700 mb-6">
                    Your order ID is <strong>{id}</strong>. We are processing your order.
                </p>
            </div>
        </div>
    );
}
