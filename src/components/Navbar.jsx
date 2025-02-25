import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import LightDarkToggle from "./LightDarkToggle";
import { fetchCategories } from "../services/api";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetchCategories()
      .then((data) => {
        setCategories(data);
        setLoadingCategories(false);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
        setLoadingCategories(false);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg py-4 animate-fadeInUp">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link
          to="/"
          className="text-2xl font-extrabold text-white hover:text-gray-200 transition-colors duration-300"
        >
          E-Shop
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            to="/products"
            className="text-white font-medium hover:text-gray-200 transition-colors duration-300"
          >
            Products
          </Link>
          {/* Categories Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="text-white font-medium hover:text-gray-200 transition-colors duration-300 focus:outline-none"
            >
              Categories
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-10">
                {loadingCategories ? (
                  <div className="p-2 text-gray-600 dark:text-gray-300">
                    Loading...
                  </div>
                ) : (
                  categories.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${encodeURIComponent(category)}`}
                      onClick={() => setDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 capitalize"
                    >
                      {category}
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
          <Link
            to="/cart"
            className="text-white font-medium hover:text-gray-200 transition-colors duration-300"
          >
            Cart
          </Link>
          {user ? (
            <>
              <span className="text-white font-medium">
                Hi, {user.username}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
              >
                Register
              </Link>
            </>
          )}
          <LightDarkToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
