import mongoose from "mongoose";
const  { Schema } = mongoose;

const postSchema = new Schema({
    title: String,
    message: String,
    imageUrl: String,
    likeCount: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    comments: [{ body: String, date: Date }]
})

const postModel = mongoose.model("postModel", postSchema)

export default postModel;