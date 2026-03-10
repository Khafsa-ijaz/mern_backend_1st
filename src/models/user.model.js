import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema=new Schema({
    user_name:{
        type:String,
        required:true,
    },
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
  type:String,
  required:true,
   }

},{timestamps:true})
userSchema.pre("save",async function(next)
{
    if(!this.isModified("password"))return ;
    this.password=await bcrypt.hash(this.password,12)
   
})
export const User=mongoose.model("User",userSchema)