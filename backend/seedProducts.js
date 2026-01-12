import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

const products = [
  {
    name: "ASUS Vivobook 16 Intel Core 13th Gen Laptop",
    price: 45000,
    category: "Electronics",
    description: "High performance laptop",
    image: "/images/laptop.png"
  },
  {
    name: "Lux Cozi Men's Cotton Regular Fit Polo T-Shirt",
    price: 323,
    category: "Fashion",
    description:
      "Lux Cozi Men's Regular Fit Polo Neck Half Sleeve Solid Casual T-shirt",
    image: "/images/tshirt.png"
  },
  {
    name: "Puma Unisex-Adult Flexfocus Lite Modern Running Shoe",
    price: 3687,
    category: "Fashion",
    description: "Comfortable running shoes",
    image: "/images/shoes.png"
  },
  {
    name: "boAt Rockerz 551ANC Bluetooth Hybrid Active Headphones",
    price: 2000,
    category: "Electronics",
    description: "Noise-cancelling headphones",
    image: "/images/head1.png"
  },
  {
    name: "Sleepy Owl Coffee Mug with Lid",
    price: 299,
    category: "Home",
    description:
      "Made from leftover coffee grounds, eco-friendly coffee mug",
    image: "/images/mug.png"
  },
  {
    name: "iPhone 17 Pro Max",
    price: 170000,
    category: "Electronics",
    description: "Latest smartphone with A19 Pro chip",
    image: "/images/iphone.png"
  }
  // 👉 you can add remaining products later (same pattern)
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("✅ Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedProducts();
