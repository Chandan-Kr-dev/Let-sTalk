import mongoose from "mongoose";

const blogSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true
    },
    Image:{
        type:String,
        required:true
    },
    BlogTitle:{
        type:String,
        required:true
    },
    Blog:{
        type:String,
        required:true
    }
},{timestamps:true})

export const Blog= new mongoose.model("Blog" , blogSchema)