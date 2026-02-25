import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
export const connectDb=async()=>{
    try
    {
 const db_connection=await mongoose.connect(`${process.env.Mongo_URI}/${DB_Name}`);
 console.log(`Db connected sucessfully db host : ${db_connection.connection.host}`);
 
    }
    catch(err){
        console.log("Db not coneected here",err);
        process.exit(1);
    }
}