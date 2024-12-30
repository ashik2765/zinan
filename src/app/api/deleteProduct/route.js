import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

export const DELETE = async (req) => {

    const db = await connectDB();
    const productsCollection = db.collection("products");

    try {
        // Get the product ID from the query string
        const url = new URL(req.url);
        const id = url.searchParams.get("id");
        // const id = req.params.id;


        if (!id) {
            return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
        }

        // Delete the product by its ID
        const result = await productsCollection.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 0) {
            return NextResponse.json({ message: "No product found with the given ID" }, { status: 404 });
        }

        return NextResponse.json({ message: "Product deleted successfully" });
    } catch (error) {
        console.error("Error deleting product:", error);
        return NextResponse.json({ message: "Failed to delete product" }, { status: 500 });
    }
};
