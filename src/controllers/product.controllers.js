import { Product } from "../models/product.model.js";
import { Cloudanaryupload } from "../utils/cloudinary.js";
import path from "path";
export const productCreate = async (req, res) => {
  console.log("FILES:", req.files);
console.log("BODY:", req.body);
  try {
    const { name, description, stock, price, category } = req.body;
    if (!(name || description || stock || price || category)) return res.status(400).json({
      success: false,
      message: "All fields are Requuired"
    })
    const imagelocalpath = req.files?.image[0]?.path;
    console.log(imagelocalpath);
    const fullPath = path.resolve(imagelocalpath).replace(/\\/g, "/");
    console.log("Full path:", fullPath);
    if (!imagelocalpath) return res.status(400).json({ message: "image not found" })
    const image = await Cloudanaryupload(fullPath);
    console.log(image)
if (!image) return res.status(500).json({ message: "Cloudinary upload failed" });
    const product = await Product.create({
      productname: name,
      description,
      stock,
      category,
      image: image.url,
      price,
    })
    console.log("image path is here", image.url);
console.log("product is here", product);
    return res.status(201).json({
      success: true,
      message: "Product Added Successfully",
      product
    })
   
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      success: false,

    })
  }
}


// import path from "path";
// import { Product } from "../models/product.model.js";
// import { Cloudanaryupload } from "../utils/cloudinary.js";

// export const productCreate = async (req, res) => {
//   try {
//     console.log("FILES:", req.files);
//     console.log("BODY:", req.body);

//     const { name, description, stock, price, category } = req.body;

//     // Check required fields
//     if (!(name && description && stock && price && category)) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // Check image exists
//     const imagelocalpath = req.files?.image?.[0]?.path;
//     if (!imagelocalpath) {
//       return res.status(400).json({ message: "Image not found" });
//     }

//     // Upload image to Cloudinary
//     const fullPath = path.resolve(imagelocalpath).replace(/\\/g, "/");
//     const image = await Cloudanaryupload(fullPath);

//     if (!image) {
//       return res
//         .status(500)
//         .json({ success: false, message: "Cloudinary upload failed" });
//     }

//     // Create product
//     const product = await Product.create({
//       productname: name,
//       description,
//       stock,
//       category,
//       price,
//       image: image.secure_url, // correct Cloudinary URL
//     });

//     console.log("Product created with image:", image.secure_url);

//     return res.status(201).json({
//       success: true,
//       message: "Product added successfully",
//       product,
//     });
//   } catch (error) {
//     console.error("Controller ERROR:", error);
//     return res.status(500).json({ success: false, message: error.message });
//   }
// };