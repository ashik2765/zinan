import Link from "next/link";
import { GiReturnArrow } from "react-icons/gi";
export default function OrdersPage() {
    const orders = [
        { id: 1, customer: "John Doe", total: "$100", status: "Pending" },
        { id: 2, customer: "Jane Smith", total: "$200", status: "Completed" },
    ];

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
                        <tr key={order.id} className="border-t">
                            <td className="px-4 py-2">{order.id}</td>
                            <td className="px-4 py-2">{order.customer}</td>
                            <td className="px-4 py-2">{order.total}</td>
                            <td className="px-4 py-2">{order.status}</td>
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
