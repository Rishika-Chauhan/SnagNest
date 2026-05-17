import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

       <h2>Total: ₹{total}</h2>
    </div>
  );
};

export default Cart;
