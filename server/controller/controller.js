import postModel from "../models/postModel.js";

export const createPost = async (req, res) => {
    const {title, message, author} = req.body
    console.log(title);
    console.log(message);
    const newPost = new postModel({title, message, author})

    try {
        await newPost.save()
        return res.status(201).json({message: "post bien enregistré"})
    } catch (error) {
        return res.status(409).json(new Error(error))
    }

    /* const post = req.body;
    const newPost = new model(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(509).json({ message: error.message })
    } */
}
