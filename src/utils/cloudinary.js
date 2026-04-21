import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
cloudinary.config({ 
  cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
  api_key:process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET
});
const Cloudanaryupload=async(localFile)=>{
try {
   if (!localFile) throw new Error("No file path provided");
     const fullPath = path.resolve(localFile).replace(/\\/g, "/");
   const response=await cloudinary.uploader.upload(localFile,{
        resource_type:"auto",
    })
    console.log("File uploaded")
    if(fullPath)
    {
  fs.unlinkSync(fullPath);
    }
  
    return response;
} catch (error) {
    const fullPath = path.resolve(localFile).replace(/\\/g, "/");
  if(fullPath)
  {
fs.unlinkSync(fullPath);
  }
    
    console.log("Cloudinary ERROR:", error);
    return null;
}
}
export {Cloudanaryupload};
