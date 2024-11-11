import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
       const connectionInstane = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n mangodb connected !! DB HOST: ${connectionInstane.connection.host}`);
       
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1)
        
    }
    
}

export default connectDB