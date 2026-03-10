// import {connectDb } from "./db/db.js";
// import dotenv from "dotenv";
// import app from "./app.js";
// dotenv.config();
// connectDb().then(
//     app.listen(process.env.PORT|| 8000,()=>{
//         console.log(`Connected on Port:,${process.env.PORT}`)
//     })
// ).catch((err)=>{
// console.log("there is a connection Error",err);
// process.exit(1)
// }
    
// )
import { connectDb } from "./db/db.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("There is a DB connection error:", err);
    process.exit(1);
  });