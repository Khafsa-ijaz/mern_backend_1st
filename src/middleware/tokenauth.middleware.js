import jwt from "jsonwebtoken";
export const authTokenMiddleware=async(req,res,next)=>{
      const token=req.headers.authorization; 
      console.log(token);
      if(!token)
      {
        console.log("JWT ERROR:", error.message);
        return res.status(401).json({
            message:"token not found"
        })
      }
    try {
      const decoded= jwt.verify(token,process.env.JWT_SECRET);
      req.user=decoded;
      next();
    } catch (error) {
      console.log("JWT ERRORrrr:", error.message);
       return res.status(500).json({message:"something went wrong in token middleware",error})
    }
}
