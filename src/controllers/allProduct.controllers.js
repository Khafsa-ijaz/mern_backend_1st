import { Product } from "../models/product.model.js"

export const getAllproduct=async(req,res)=>{
    try {
         const product = await Product.find()
         return res.status(200).json({message:"products are here",
            product
         })
    } catch (error) {
        return res.status(500).json({message:message.error})
    }
  
}