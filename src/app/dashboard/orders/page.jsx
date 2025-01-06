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
        console.log(orders)
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-6 text-center">All Orders</h1>
                {/* Wrapper for responsive behavior */}
                <div className="overflow-x-auto">
                    {/* Table for larger screens */}
                    <table className="hidden md:table w-full border-collapse bg-white rounded-lg shadow-md">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="px-4 py-2 text-left">Product Details</th>
                                <th className="px-4 py-2 text-left">Customer Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.length > 0 ? (
                                orders.map((order) => (
                                    <tr key={order?._id} className="border-t">
                                        <td className="px-4 py-2">
                                            {order?.id}
                                            <br />
                                            {order?.cartItems[0]?.name}
                                            <br />
                                            <span>Price:</span> {order?.cartItems[0]?.price?.discounted}
                                        </td>
                                        <td className="px-4 py-2">
                                            
                                                <span>Name:</span> {order.customerInfo?.name}
                                                <br />
                                                <span>Email:</span> {order.customerInfo?.email}
                                                <br />
                                                <span>Phone:</span> {order.customerInfo?.phone}
                                            
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="px-4 py-2 text-center">
                                        No orders available
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    {/* Card layout for smaller screens */}
                    <div className="md:hidden space-y-4">
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <div
                                    key={order?._id}
                                    className="border rounded-lg bg-white p-4 shadow-md"
                                >
                                    <div className="mb-2">
                                        <h2 className="font-bold">Product Details:</h2>
                                        <p>Order ID: {order?.id}</p>
                                        <p>Product Name: {order?.cartItems[0]?.name}</p>
                                        <p>Price: {order?.cartItems[0]?.price?.discounted}</p>
                                    </div>
                                    <div>
                                        <h2 className="font-bold">Customer Details:</h2>
                                        <p>Name: {order.customerInfo?.name}</p>
                                        <p>Email: {order.customerInfo?.email}</p>
                                        <p>Phone: {order.customerInfo?.phone}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No orders available</p>
                        )}
                    </div>
                </div>
                {/* Go Back Link */}
                <div className="flex justify-end items-center pt-10 text-red-600">
                    <Link href="/dashboard" className="flex items-center">
                        Go Back <GiReturnArrow className="text-red-600 text-2xl ml-1" />
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
