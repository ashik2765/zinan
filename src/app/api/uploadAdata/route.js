import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
    try {
        // Parse the JSON body from the request
        const product = await request.json();

        // Connect to the database
        const database = await connectDB();
        const productCollection = database.collection("products");

        // Insert the product into the database
        const result = await productCollection.insertOne(product);

        // Return the inserted result
        return NextResponse.json({ success: true, result });
    } catch (error) {
        console.error("Database insertion error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to save product in database" },
            { status: 500 }
        );
    }
};
