import {User} from "../models/user.model.js";
import { Cloudanaryupload } from "../utils/cloudinary.js";
export const registerUser=async(req,res)=>{
    try{
 const {name, email,password}=req.body;
 console.log(req.body);
const userexsist=await User.findOne({email})
if(userexsist){
    return res.status(401).json({message:"User Already found",
        success:false
    })
}
if(!name ||!password)
{
    return res.status(400).json({message:"All fields are required"})
}
const img =req.files?.image[0]?.path;
console.log("img is here",img);
const fullPath = path.resolve(img).replace(/\\/g, "/");
    console.log("Full path:", fullPath);
    if (!img) return res.status(400).json({ message: "image not found" })
    const image = await Cloudanaryupload(fullPath);
    console.log(image)
 const user =await User.create({
    user_name:name,
    password,
    email,
    image:image.url,
 })
  return res.status(201).json({
    message:"Registered Successfully",
    userId: user._id,
    name: user.user_name,
    email: user.email,
    image:user.image,
    success:true
 })

    }
    catch(err)
    {
    return res.status(500).json({
        message:err.message,
        success:false,
        
    })
    }
}