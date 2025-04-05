import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-md mt-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <h3 className="font-bold">{item.name}</h3>
                <p>₹{item.price} x {item.quantity}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Checkout Button */}
      {cart.length > 0 && (
        <a
          href="/checkout"
          className="mt-6 block text-center bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </a>
      )}
    </div>
  );
};

export default Cart;
