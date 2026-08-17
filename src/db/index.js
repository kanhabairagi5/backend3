import dns from "dns";
dns.setServers(['1.1.1.1', '1.0.0.1']); 

import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

console.log(process.env.MONGODB_URI);

const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n MongoDB Connected !! DB HOST: 
        ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB Connection error", error)
        process.exit(1)
    }
}

export default connectDB