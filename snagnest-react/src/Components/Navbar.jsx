import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SnagNest
      </Link>

      <input type="text" placeholder="Search products" />

      <Link to="/cart">
        Cart ({cart.length})
      </Link>
    </nav>
  );
};

export default Navbar;
