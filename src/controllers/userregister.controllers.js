import {User} from "../models/user.model.js"
export const registerUser=async(req,res)=>{
    try{
 const {name, email,password}=req.body;
const userexsist=await User.findOne({email})
if(userexsist){
    return res.send("User Already found")
}
if(!name ||!password)
{
    return res.status(400).json({message:"All fields are required"})
}
 const user =await User.create({
    user_name:name,
    password,
    email,
 })
 res.status(201).json({
    message:"Registered Successfully",
    userId: user._id,
    name: user.user_name,
    email: user.email,
    success:true
 })
 return
    }
    catch(err)
    {
    return res.status(500).json({
        message:err.message,
        success:false,
        
    })
    }
}