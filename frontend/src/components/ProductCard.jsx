// ProductCard.jsx
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const navigate = useNavigate(); // for Buy Now redirect

  // Add to cart with temporary feedback
  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  // Buy now → add to cart and go to checkout page
  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="bg-white p-4 rounded border-2 border-gray-200 shadow hover:shadow-lg transition transition duration-300 hover:scale-110">
      {/* Product Image & Title */}
      <Link to={`/product/${product._id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="h-40 mx-auto object-contain "
        />
        <h2 className="font-bold mt-2 text-center">{product.title}</h2>
      </Link>

      {/* Product Price */}
      <p className="text-gray-600 text-center mt-1">₹{product.price}</p>

      {/* Buttons */}
      <div className="flex gap-2 mt-3">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded
             transform transition duration-200
             hover:scale-105 hover:bg-blue-700 active:scale-95"
        >
          Add to Cart
        </button>
        <button
          onClick={handleBuyNow}
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded
             transform transition duration-200
             hover:scale-105 hover:bg-green-700 active:scale-95"
        >
          Buy Now
        </button>
      </div>

      {/* Feedback message */}
      {added && (
        <p className="text-green-600 text-sm mt-2 text-center">
          ✅ Added to cart
        </p>
      )}
    </div>
  );
}

export default ProductCard;
