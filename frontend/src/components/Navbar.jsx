import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Navbar() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    clearCart(); // ✅ clear cart
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-800 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-yellow-400">
          SG Mart
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/">Home</Link>

          {token && (
            <Link to="/cart">
              Cart
              {cartCount > 0 && (
                <span className="ml-1 bg-red-600 text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          )}

          {token && <Link to="/checkout">Checkout</Link>}

          {token ? (
            <>
              <span className="text-sm">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-700 flex flex-col px-4 pb-4 space-y-3">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          {token && (
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart ({cartCount})
            </Link>
          )}

          {token && (
            <Link to="/checkout" onClick={() => setMenuOpen(false)}>
              Checkout
            </Link>
          )}

          {token ? (
            <>
              <span className="text-sm opacity-90">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-3 py-1 rounded text-sm w-fit"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                Login
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
