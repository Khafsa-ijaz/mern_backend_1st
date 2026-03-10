import { Cart } from "../models/cart.model.js";
import { Product } from "../models/product.model.js";
import { User } from "../models/user.model.js";

export const productCart = async (req, res) => {
    try {
        const { username, items } = req.body;
        const product = items.product;
        const quantity = items.quantity;
        let user = await User.findOne({ user_name: username });
        if (!user) {
            return res.status(400).json({
                message: " user not exsist",
                success: false

            })
        }
        const addproduct = await Product.findOne({productname: product })
        if (!addproduct) {
            return res.status(404).json({
                message: "Product not found",
                success: false
            });
        }
        let cart = await Cart.findOne({ username: user._id });
        if (!cart) {
            cart = await Cart.create({
                username: user._id,
                items: [{
                    product: addproduct._id,
                    quantity: items.quantity,
                }]
            })
            return res.status(201).json({
                message: " product add to cart",
                cart,
                success: true

            })
        }
           const proexsist = cart.items.find(
            item => item.product && item.product.toString() === addproduct._id.toString()
        );
        if (proexsist) {
            proexsist.quantity += quantity;
        }
        else {
            cart.items.push({
                product: addproduct._id,
                quantity,
            })

        }
        await cart.save();
        
        return res.status(201).json({
            message: " product add to cart",
            cart,
            success: true

        })
       

    } catch (error) {

        return res.status(500).json({
            message: error.message,
            success: false,
        })
    }
}