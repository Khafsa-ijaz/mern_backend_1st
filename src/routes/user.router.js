import express from "express";
import { registerUser } from "../controllers/userregister.controllers.js";
import {Login} from "../controllers/login.controllers.js";
import { productCreate } from "../controllers/product.controllers.js";
const router=express.Router();
router.post("/register",registerUser);
router.post("/login",Login);
// router.post("/product",productCreate);

export default router;