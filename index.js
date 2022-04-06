import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use('/images', express.static(path.join(__dirname, 'images')))
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;
const urlDatabase = "mongodb+srv://aldohxc:aldohxc@cluster0.g1gtp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(urlDatabase).then(() => app.listen(PORT, () => {console.log(`server listening on port ${PORT}`)}))
.catch(error => console.log(error));

app.use('/app', postRoutes);