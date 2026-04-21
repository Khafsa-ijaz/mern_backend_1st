import express from"express";
import {productCreate} from "../controllers/product.controllers.js"
import { deleteProduct } from "../controllers/deleteProduct.controllers.js";
import { upload} from "../middleware/multer.middleware.js"
import {authTokenMiddleware} from "../middleware/tokenauth.middleware.js"
import { getAllproduct } from "../controllers/allProduct.controllers.js";
const productRouter=express.Router();
productRouter.post("/add",
    upload.fields([
   { name:"image",
    maxCount:1}
    ]),
    productCreate);
productRouter.delete("/:id",deleteProduct);
productRouter.get("/view",getAllproduct);
export default productRouter;