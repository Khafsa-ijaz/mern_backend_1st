// // cleanCart.js
// import mongoose from "mongoose";
// import { Cart } from "../";

// // 1. Connect to MongoDB
// mongoose.connect("mongodb://127.0.0.1:27017/yourdbname", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("MongoDB connected"))
// .catch(err => console.error(err));

// const cleanCartItems = async () => {
//     try {
//         const carts = await Cart.find({});
//         for (const cart of carts) {
//             // Keep only items where product is a valid ObjectId
//             cart.items = cart.items.filter(item => mongoose.Types.ObjectId.isValid(item.product));
//             await cart.save();
//         }
//         console.log("Old cart items cleaned");
//         process.exit(0); // exit after done
//     } catch (error) {
//         console.error(error);
//         process.exit(1);
//     }
// };

// cleanCartItems();