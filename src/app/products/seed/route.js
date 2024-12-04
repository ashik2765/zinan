import { products } from "@/lib/all-products";
import { connectDB } from "@/lib/connectDB"
import { NextResponse } from "next/server";

export const GET = async () => {
    const db = await connectDB();
    const productCollection = db.collection('products');
    try {
        await productCollection.deleteMany();
        const resp = await productCollection.insertMany(products)
        return NextResponse.json({ message: "seeds successfully" })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "faild" })
    }
}