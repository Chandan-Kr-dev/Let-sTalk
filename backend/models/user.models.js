import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    UserName: {
        type:String,
        required:true,
        unique:true
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Password:{
        type:String,
        required:true
    }
})

export const User=new mongoose.model("User" ,userSchema)