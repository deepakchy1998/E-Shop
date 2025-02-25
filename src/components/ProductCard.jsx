import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">
          {product.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          ${product.price}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="inline-block bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-2 rounded hover:opacity-90 transition-opacity duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
