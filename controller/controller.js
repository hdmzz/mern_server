import postModel from "../models/postModel.js";
import { readFileSync, writeFileSync, readdirSync, appendFileSync, rmSync, existsSync, mkdirSync, writeFile } from "fs"


export const createPost = async (req, res) => {
    try {


        console.log('reqbody', req.body);

        /* await newPost.save()
        res.status(201).json({message: "post bien enregistré"}) */
    } catch (error) {
        console.log(error);
        res.status(409).json(new Error(error))
    }
}

export const getPosts = async (req, res) => {
    try {
        postModel.find().then((data) => {
            res.status(200).json(data)
        })
    } catch (error) {
        res.status(500).send(new Error("database error sorry try again later"))
    }
}

export const deletePost = (req, res) => {
    postModel.deleteOne({_id: req.body.id}).then(info => {
        console.log(info)
        res.status(204).send(info)
    })
}

export const updatePost = (req, res) => {
    console.log(req.body);
    postModel.updateOne({ _id: req.body.id }, {$set: { title: req.body.newTitle, message: req.body.newMessage }})
    .then(info => console.log(info))
    .then(() => res.status(200).send("post modifier avec succès"))
    .catch(error => console.log(error))
}