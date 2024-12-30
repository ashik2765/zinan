import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const ordersCollection = db.collection("orders")
    try {
        const orders = await ordersCollection.find().toArray();
        return NextResponse.json({ orders })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "faild" })
    }
}