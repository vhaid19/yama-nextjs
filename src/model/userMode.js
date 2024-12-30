import mongoose, { model } from "mongoose";
import { tree } from "next/dist/build/templates/app-page";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
    }
});

const User = mongoose.model("User", userSchema);
mongoose.model = {};
module.exports = User;