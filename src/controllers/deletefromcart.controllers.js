import { Cart } from "../models/cart.model.js";
import { User } from "../models/user.model.js";

export const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const { username } = req.body;
        const user = await User.findOne({ user_name: username })
        if (!user) return res.status(400).json({ message: "user not found" })
        let cart = await Cart.findOne({ username: user._id })
        if (!cart) return res.status(400).json({ message: " cart not found" });
        const item = cart.items.find((item) => item.product.toString() === id);
        if (!item) return res.status(400).json({ message: "product not in cart" });
        if (item.quantity > 1) {
            item.quantity -= 1
        }
        else {
            cart.items=cart.items.filter((item) => item.product.toString() !== id);
        }
        await cart.save();
        return res.status(201).json({ message: "product deleted Successfully" })
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }

}