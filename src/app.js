import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/user.router.js"
const app =express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"400kb"}));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/api/users", userRoutes);
export default app;