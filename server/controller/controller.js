import model from "../models/postModel.js";

export const testController = (req, res) => {
    res.send('bien recu')
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new model(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(509).json({ message: error.message })
    }
}
