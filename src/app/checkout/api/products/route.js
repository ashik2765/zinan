import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await connectDB();
        const productsCollection = db.collection("products"); // Your collection name
        const products = await productsCollection.find({}).toArray();

        return NextResponse.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { message: "Failed to fetch products" },
            { status: 500 }
        );
    }
}