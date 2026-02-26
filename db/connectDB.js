import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const DB_URL = process.env.DB_URL

const connectDB = () => {
    mongoose.connect(DB_URL).then(() => {
        console.log(`Connected to Database Successfully...`);
    }).catch((err) => {
        console.log('Error connecting to MongoDB');
    })
}

export default connectDB