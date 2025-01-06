import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        // Connect to the database
        const database = await connectDB();
        const usersCollection = database.collection("users");

        // Fetch all users from the collection
        const users = await usersCollection.find({}).toArray();

        // Return the fetched users
        return NextResponse.json({ success: true, data: users });
    } catch (error) {
        console.error("Error fetching users:", error);
        return NextResponse.json(
            { success: false, message: "Failed to fetch users" },
            { status: 500 }
        );
    }
};
