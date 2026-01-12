import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(""); // ✅ NEW

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-6 text-center">Loading product...</p>;
  if (!product) return <p className="p-6 text-center">Product not found</p>;

  const handleAddToCart = () => {
    addToCart(product);
    setMessage("✅ Added to cart");
    setTimeout(() => setMessage(""), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-64 mx-auto object-contain mb-6"
      />

      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="mb-4">{product.description}</p>
      <p className="font-bold text-xl mb-6">₹{product.price}</p>

      <div className="flex gap-4">
        <button
          onClick={handleAddToCart}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>

        <button
          onClick={handleBuyNow}
          className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Buy Now
        </button>
      </div>

      {/* ✅ MESSAGE */}
      {message && (
        <p className="mt-4 text-green-600 font-medium text-center">
          {message}
        </p>
      )}
    </div>
  );
}

export default ProductDetails;
