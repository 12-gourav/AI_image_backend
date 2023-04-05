import express from "express";
import * as dotenv from "dotenv";
import {v2 as cloudinary} from "cloudinary";
import {Post} from "../Models/post.js";


export const createPost = async (req,res)=>{
    try {
        const {name,prompt,photo} = req.body;

        const photourl = await cloudinary.uploader.upload(photo);
        const newPost = await Post.create({name,prompt,photo:photourl.url});
        res.status(201).json({success:true,data:newPost});

        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:error});
    }
}

export const getPost = async (req,res)=>{
    try {
       const allpost = await Post.find({}).sort({createdAt:-1}).exec();
       res.status(200).json({data:allpost});
        
        
    } catch (error) {
        console.log(error);
        res.status(500).json({success:false,message:error});
    }
}