import mongoose from "mongoose";

const url = "mongodb://127.0.0.1:27017/travel_planner";

const dbconnect = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit if cannot connect to database
    }
}

export default dbconnect;