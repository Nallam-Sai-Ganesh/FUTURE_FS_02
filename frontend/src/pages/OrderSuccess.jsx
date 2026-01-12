import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Order Placed Successfully 🎉
      </h1>

      <p className="mb-4">
        Thank you for your purchase. Your order has been placed.
      </p>

      <Link
        to="/"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}

export default OrderSuccess;
