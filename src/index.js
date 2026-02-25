import {connectDb } from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config();
connectDb().then(
    app.listen(process.env.PORT|| 8000,()=>{
        console.log(`Connected on Port:,${process.env.PORT}`)
    })
).catch((err)=>{
console.log("there is a connection Error",err);
throw err;
}
    
)