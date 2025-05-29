import mongoose from "mongoose";

export async function connectDB () {
    try {
        await mongoose.connect(process.env.MONGO_URI || "")
        console.log("MongoDB Connect")
    } catch (error) {
        console.log("MongoDB Connection Error:", error)
        process.exit(1)
    }
}