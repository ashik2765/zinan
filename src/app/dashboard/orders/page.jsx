import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";

const OrdersPage = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`, {
            next: { revalidate: 60 }, // Optional: Revalidate the data every 60 seconds
        });

        // Handle API response errors
        if (!res.ok) {
            console.error("Failed to fetch orders data");
            return (
                <div>
                    <h1 className="text-2xl font-bold mb-6">All Orders</h1>
                    <p className="text-red-500">Failed to load orders.</p>
                </div>
            );
        }

        const ordersData = await res.json();
        const orders = ordersData.orders || [];

        return (
            <div>
                <h1 className="text-2xl font-bold mb-6">All Orders</h1>
                <table className="w-full border-collapse bg-white rounded-lg shadow-md">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="px-4 py-2 text-left">Order ID</th>
                            <th className="px-4 py-2 text-left">Customer</th>
                            <th className="px-4 py-2 text-left">Total</th>
                            <th className="px-4 py-2 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order?._id} className="border-t">
                                    <td className="px-4 py-2">{order?.id}</td>
                                    <td className="px-4 py-2">{order.customerInfo?.name}</td>
                                    <td className="px-4 py-2">
                                        {order?.cartItems[0]?.price?.discounted}
                                    </td>
                                    <td className="px-4 py-2">Pending</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-4 py-2 text-center">
                                    No orders available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-end items-center pt-10 text-red-600">
                    <Link href="/dashboard">
                        Go Back <span><GiReturnArrow className="text-red-600 text-2xl" /></span>
                    </Link>
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching orders data:", error);
        return (
            <div>
                <h1 className="text-2xl font-bold mb-6">All Orders</h1>
                <p className="text-red-500">Error loading orders. Please try again later.</p>
            </div>
        );
    }
};

export default OrdersPage;
