// require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
})

connectDB()









// one approtch to connect database

/*
import express from "express"
const app = express

( async ()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("error",(error) =>{
        console.log("ERR:",error)
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log("Server is running on port",process.env.PORT)
       })
    } catch (error) {
        console.error("ERROR:",error)
        throw err
        
    }
})()*/