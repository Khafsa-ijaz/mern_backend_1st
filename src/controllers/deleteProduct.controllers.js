import { Product } from "../models/product.model.js";

export const deleteProduct=async(req,res)=>{
try {
    const {id}=req.params;
    const checkproduct=await Product.findByIdAndDelete(id);
    if(!checkproduct) return res.status(400).json({message:"product not found"})
 return res.status(201).json({message:"product deleted successfuly"})
    
} catch (error) {
 return res.status(400).json({message:error.message})   
}
}