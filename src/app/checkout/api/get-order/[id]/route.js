import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params; // Extract the order ID from the URL parameters

    if (!id) {
        return NextResponse.json(
            { message: "Order ID is required" },
            { status: 400 }
        );
    }

    try {
        const db = await connectDB();
        const ordersCollection = db.collection("orders"); // Assuming the orders are stored in a collection named "orders"

        const order = await ordersCollection.findOne({ _id: new ObjectId(id) });

        if (!order) {
            return NextResponse.json(
                { message: "Order not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(order);
    } catch (error) {
        console.error("Error fetching order:", error);
        return NextResponse.json(
            { message: "Failed to fetch order details" },
            { status: 500 }
        );
    }
}
