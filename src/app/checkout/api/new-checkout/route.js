import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const checkoutData = await request.json();
    const database = await connectDB();
    const checkoutCollection = database.collection("checkout");
    
    try {
        const result = await checkoutCollection.insertOne(checkoutData);
        return NextResponse.json({ result });
    } catch (error) {
        console.error("Database insertion error:", error);
        return NextResponse.json({ message: "Failed to save checkout data" });
    }
};
