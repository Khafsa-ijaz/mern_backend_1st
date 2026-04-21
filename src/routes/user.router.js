import express from "express";
import { registerUser } from "../controllers/userregister.controllers.js";
import {Login} from "../controllers/login.controllers.js";
import { upload} from "../middleware/multer.middleware.js"
import { authTokenMiddleware } from "../middleware/tokenauth.middleware.js";
import { userProfile } from "../controllers/useprofile.controllers.js";
const router=express.Router();
router.post("/register", upload.fields([
   { name:"image",
    maxCount:1}
    ]),
    registerUser);
router.post("/login",Login);
router.get("/profile",authTokenMiddleware,userProfile);
// router.post("/product",productCreate);

export default router;