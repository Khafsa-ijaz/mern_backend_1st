import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
export const Login=async(req,res)=>{
    try {
         const {email, password}=req.body;
         console.log(req.body);
         const user=await User.findOne({email});
         if(!user){
            return res.status(400).json({message:"InValid Crdentials",
                 success:false,
              email,
            });
         }
         const isMatch=await bcrypt.compare(password,user.password);
         if(!isMatch){
            return res.status(400).json({message:"Invalid credentials",
                success:false,
              email,
            });
         }
        return res.status(200).json({
            message:"Login successfully",
            success:true,
         })
        
    } catch (error) {
       return res.status(500).json({message:error.message,
            success:false})
    }
   
}