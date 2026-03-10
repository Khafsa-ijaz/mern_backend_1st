import { Product } from "../models/product.model.js";

export const productCreate=async(req,res)=>{
try {
    const {name,description,image,stock,price,category}=req.body;
    if(!(name||description||image||stock||price||category)) return res.status(400).json({
        success:false,
        message:"All fields are Requuired"
    })
    const product=await Product.create({
        productname:name,
        description,
        stock,
        category,
        image,
        price,    })
     return res.status(201).json({
        success:true,
        message: "Product Added Successfully",
    product})
} catch (error) {
    return res.status(500).json({
        message:error.message,
        success:false,

    })
}
}

