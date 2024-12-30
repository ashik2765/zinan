import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";

const getOrdersData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`)
    const orders = res.json()
    return orders
}
const OrdersPage = async () => {
    const ordersData = await getOrdersData();
    const orders = ordersData.orders
    console.log("orders from orders", orders)
    // const orders = [
    //     { id: 1, customer: "John Doe", total: "$100", status: "Pending" },
    //     { id: 2, customer: "Jane Smith", total: "$200", status: "Completed" },
    //     { id: 3, customer: "Jane Smith", total: "$200", status: "Completed" },
    // ];

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
                    {orders.map((order) => (
                        <tr key={order?._id} className="border-t">
                            <td className="px-4 py-2">{order?.id}</td>
                            <td className="px-4 py-2">{order.customerInfo?.name}</td>
                            <td className="px-4 py-2">{order?.cartItems[0]?.price?.
                                discounted}</td>
                            <td className="px-4 py-2">pending</td>
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
export default OrdersPage; 
