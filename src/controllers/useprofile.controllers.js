import { User } from "../models/user.model.js";
export const userProfile=async(req,res)=>{
    const user=req.user;
   const newuser = await User.findById(user.id).select(" user_name email");
    console.log("here is the user",newuser);
    console.log(newuser);
    return res.status(200).json({
        message:"user profilee is here",
        newuser,
    })

}