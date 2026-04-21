import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/user.router.js";
import cartRoutes from "./routes/cart.router.js";
import productRoutes from "./routes/product.router.js"
const app =express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    //  origin:"http://localhost:5173",
    // credentials:true
    
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"400kb"}));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/api/users", userRoutes);
app.use("/api/admin/users", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/admin/product",productRoutes);
export default app;