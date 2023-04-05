import express from "express";
import { createImage } from "../controllers/dalleController.js";

const router = express.Router();


router.post("/",createImage);



export default router;