import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      
      {/* Top section */}
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
          SG Mart
          </h2>
          <p className="text-sm leading-relaxed">
            SG Mart is your trusted online shopping destination offering
            quality products at affordable prices. Enjoy a smooth shopping
            experience with secure checkout and fast service.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            Customer Service
          </h2>
          <ul className="space-y-2 text-sm">
            <li>Help & Support</li>
            <li>Shipping Information</li>
            <li>Returns & Refunds</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-2">
            Shop
          </h2>
          <ul className="text-sm space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                All Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white">
                View Cart
              </Link>
            </li>
            <li>
              <Link to="/checkout" className="hover:text-white">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © 2026 <span className="text-white font-semibold">SG Mart</span>. All
        rights reserved.
        <br />
        <span className="text-white font-semibold">SG Mart</span> · Built by <span className="text-yellow-400">Nallam Sai Ganesh</span>
      </div>

    </footer>
  );
}

export default Footer;
