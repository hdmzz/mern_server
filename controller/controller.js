import postModel from "../models/postModel.js";
import { readFileSync, writeFileSync, readdirSync, appendFileSync, rmSync, existsSync, mkdirSync, writeFile } from "fs"
import { title } from "process";


export const createPost = async (req, res) => {
    try {
        let imageUrl;
        if (req.file) {
            imageUrl = `${req.protocol}://${req.get('host')}/resizedImage/${req.file.filename}`;
        }
        const title = req.body.title
        const message = req.body.message
        console.log(req.body.title)
        const newPost = new postModel({
            title,
            message,
            imageUrl
        })
        await newPost.save().then(() => console.log('ok'))
        res.status(201).json({message: "post bien enregistré"}) 
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
    console.log(req.body);
    //on doit resoudre l'url de l'image du post si il ya une image 
    postModel.deleteOne({_id: req.body.id}).then(info => {
        if (req.body.imageUrl) {
            const url = req.body.imageUrl.slice(22)
            rmSync(url)
        }
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