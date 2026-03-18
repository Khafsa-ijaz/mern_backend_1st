import express from "express";
import { deleteCart } from "../controllers/deletefromcart.controllers.js";
import { productCart } from "../controllers/cart.controllers.js";
const cartrouter =express.Router();
cartrouter.get("/add",productCart)
cartrouter.delete("/remove/:id",deleteCart)
export default cartrouter;