import express from "express";
const router = express.Router();
import { createPost } from "../controller/controller.js"

router.post("/createPost", createPost)

export default router;