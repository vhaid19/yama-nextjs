import mongoose from "mongoose";

const db = mongoose.connect(process.env.MONGODB_URL)
console.log(db)