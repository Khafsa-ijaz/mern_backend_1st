import mongoose, { Schema } from "mongoose";
const productSchema = new Schema({
    productname: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        default:0,
        required:true,

    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,

    }
}, {timestamps:true})
export const Product = mongoose.model("Product", productSchema)