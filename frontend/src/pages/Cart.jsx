import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  if (!cart || cart.length === 0)
    return <p className="p-6 text-center">Your cart is empty</p>;

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      {cart.map((item) => (
        <div
          key={item._id}
          className="flex justify-between border p-4 mb-2 rounded"
        >
          <div>
            <h2 className="font-semibold">{item.title}</h2>
            <p>
              ₹{item.price} × {item.quantity} = ₹
              {item.price * item.quantity}
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <button
              onClick={() => decreaseQuantity(item._id)}
              className="bg-red-600 text-white px-2 rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => increaseQuantity(item._id)}
              className="bg-green-600 text-white px-2 rounded"
            >
              +
            </button>
          </div>
        </div>
      ))}

      <h2 className="mt-4 text-lg font-bold">
        Total: ₹{total}
      </h2>

      <Link
        to="/checkout"
        className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default Cart;
