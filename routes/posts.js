import express from "express";
const router = express.Router();
import { createPost, deletePost, getPosts, updatePost } from "../controller/controller.js"
import upload from '../middleware/multer-config.js'

router.post("/createPost", upload, createPost)
router.get("/getPosts", getPosts)
router.delete("/deletePost", deletePost)
router.put("/updatePost", updatePost)
export default router;