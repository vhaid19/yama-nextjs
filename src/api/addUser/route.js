import connectDB from "@/lib/dbConnection";
import User from '@/model/userMode'
const jwt = require("jsonwebtoken");
const secret = "YOUR_JWT_SECRET_KEY";


export default async function POST(Request) {
    await connectDB();
    
    try {
        const data = await Request.json();

        let user = new User({
            name: data.name,
            email: data.email,
            message: data.message
        })

        await user.save();

        return new Response("", {
            status: 200,
        });
    } catch (error) {
        console.log(`error:-${error}`)
    }

}