import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    const userInfo = await request.json();
    const database = await connectDB();
    const usersCollection = database.collection("users");

    try {
        const exist = await usersCollection.findOne({ email: userInfo.email })
        if (exist) {
            return NextResponse.json({ message: "user already exist" });
        }
        const hash = bcrypt.hashSync(userInfo.password, 14);
        const result = await usersCollection.insertOne({ ...userInfo, password: hash });
        return NextResponse.json({ result });
    } catch (error) {
        console.error("Database insertion error:", error);
        return NextResponse.json({ message: "Failed to save user in database" });
    }
};