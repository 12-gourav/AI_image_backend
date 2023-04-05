import mongoose from "mongoose"

export const database = ()=>{
    mongoose.set('strictQuery',true);
    const db = mongoose.connect(process.env.db).then(()=>{
        console.log("Database Connected Successfully")
    }).catch((err)=>{
        console.log(err);
    })
}