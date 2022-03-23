import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/posts.js"


const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
const PORT = process.env.PORT || 5000;
const urlDatabase = "mongodb+srv://aldohxc:aldohxc@cluster0.g1gtp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(urlDatabase).then(() => app.listen(PORT, () => {console.log(`server listening on port ${PORT}`)}))
.catch(error => console.log(error));

app.use('/app', postRoutes);

