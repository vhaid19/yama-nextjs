import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        if(mongoose.connection.readyState === 0) {
            await mongoose.connect("mongodb://localhost:27017/vistors");
            console.log("Mongodb databse is connected....")
        }else{
            console.log("Using existing MongoDB connection...")
        }
        
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export default connectDB;