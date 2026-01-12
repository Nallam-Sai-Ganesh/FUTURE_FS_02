import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import { products } from "./data/products.js";

dotenv.config();
await connectDB();

await Product.deleteMany(); // clean old data
await Product.insertMany(products);

console.log("✅ Products inserted into database");
process.exit();
