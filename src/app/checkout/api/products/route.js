import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await connectDB();
        const productsCollection = db.collection("products");
        const products = await productsCollection.find({}).toArray();

        const response = NextResponse.json(products);

        // Set CORS headers
        response.headers.set("Access-Control-Allow-Origin", "https://zinan-ndv07tpcs-ashik2765s-projects.vercel.app"); // Your frontend URL
        response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

        return response;
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json(
            { message: "Failed to fetch products" },
            { status: 500 }
        );
    }
}

// Optional: Handle preflight requests for POST, PUT, DELETE, etc.
export async function OPTIONS() {
    const response = new NextResponse(null, { status: 204 });

    response.headers.set("Access-Control-Allow-Origin", "https://www.shajaoud.com");
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return response;
}
