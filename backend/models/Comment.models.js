import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Comment:{
        type:String,
        required:true
    },
    BlogId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Blog'
    }
},{timestamps:true})

export const Comment=new mongoose.model('Comment',commentSchema)