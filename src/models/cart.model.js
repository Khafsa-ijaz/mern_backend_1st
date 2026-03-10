import mongoose, { Schema } from "mongoose";
import { Product } from "./product.model";
const cartSchema = new Schema({
    username: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    items:
        [
            {
                product: {
                    type: Schema.Types.ObjectId,
                    ref: "Product",
                    required: true,
                },
                quantity: {
                    type: Number,
                    required:true,
                    default: 1,
                    min: 1,

                }
            }
        ]
}, { timestamps: true })
export const Cart = mongoose.model("Cart", cartSchema)