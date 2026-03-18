import express from"express";
import {productCreate} from "../controllers/product.controllers.js"
import { deleteProduct } from "../controllers/deleteProduct.controllers.js";
import { upload} from "../middleware/multer.middleware.js"
const productRouter=express.Router();
productRouter.post("/add",
    upload.fields([
   { name:"image",
    maxCount:1}
    ]),
    productCreate);
productRouter.delete("/:id",deleteProduct);
export default productRouter;