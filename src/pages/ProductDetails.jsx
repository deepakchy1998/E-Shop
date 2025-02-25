import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { fetchProductById } from "../services/api";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProductById(id)
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center">Loading product...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!product) return <p className="text-center">No product found.</p>;

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <img
        src={product.image}
        alt={product.title}
        className="w-full md:w-1/2 object-contain p-4"
      />
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          {product.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {product.description}
        </p>
        <p className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          ${product.price}
        </p>
        <button
          onClick={handleAddToCart}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
