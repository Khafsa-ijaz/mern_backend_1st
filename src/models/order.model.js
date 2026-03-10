import mongoose, { Schema } from "mongoose";
const orderSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: "Products",
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        maxlength: 11,
        required: true,
    }
}, { timestamps: true }) 