import { Link } from "react-router-dom";

const OrderConfirmation = () => {
  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow text-center">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        Order Confirmed!
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Thank you for your purchase. Your order has been placed successfully.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderConfirmation;
