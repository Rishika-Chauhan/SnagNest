import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
    
    <img
  src={product.image}
  alt={product.title}
    />

      <h3>{product.title}</h3>

      <p>₹ {product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;