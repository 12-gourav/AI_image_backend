import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { database } from "./database/database.js";
import postRoute from "./Routes/postRoutes.js";
import dalleyRoute from "./Routes/dalleRoutes.js";
import cloudinary from "cloudinary";

dotenv.config({
    path:"./.env"
});

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

const app = express();

const PORT = process.env.port || 5000;

//database
database();

app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use("/api/v1/post",postRoute);
app.use("/api/v1/dalle",dalleyRoute)




app.get("/",(req,res)=>{
res.status(200).json({message:"Server is runninig....."});
})


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})