import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } =
    useContext(CartContext);
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (cartItems.length === 0)
    return <p className="text-center">Your cart is empty.</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Your Cart
      </h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="p-2 border-b">Product</th>
            <th className="p-2 border-b">Price</th>
            <th className="p-2 border-b">Quantity</th>
            <th className="p-2 border-b">Subtotal</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.product.id}>
              <td className="p-2 border-b flex items-center space-x-2">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="w-12 h-12 object-contain"
                />
                <span className="text-gray-800 dark:text-gray-200">
                  {item.product.title}
                </span>
              </td>
              <td className="p-2 border-b text-gray-800 dark:text-gray-200">
                ${item.product.price}
              </td>
              <td className="p-2 border-b">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.product.id, Number(e.target.value))
                  }
                  className="w-16 p-1 border rounded"
                />
              </td>
              <td className="p-2 border-b text-gray-800 dark:text-gray-200">
                ${(item.product.price * item.quantity).toFixed(2)}
              </td>
              <td className="p-2 border-b">
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-right">
        <p className="text-xl font-bold text-gray-800 dark:text-gray-200">
          Total: ${total.toFixed(2)}
        </p>
        <div className="mt-4">
          <button
            onClick={() => navigate("/checkout")}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            Checkout
          </button>
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
