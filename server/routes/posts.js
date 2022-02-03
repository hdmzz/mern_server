import express from "express";
const router = express.Router();
import { testController, createPost } from "../controller/controller.js"

router.get('/', createPost);

export default router;