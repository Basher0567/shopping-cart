import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

const Navbar = () => {

  const { totalItems } = useCart();

  return (
    <nav className="navbar">

      <Link
        to="/"
        className="logo"
      >
        ShopCart
      </Link>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/cart">
          🛒 Cart

          <span className="cart-count">
            {totalItems}
          </span>
        </Link>

      </div>

    </nav>
  );
};

export default Navbar;