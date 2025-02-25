import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext } from "../contexts/AuthContext";
import LightDarkToggle from "./LightDarkToggle";
import { fetchCategories } from "../services/api";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // State to toggle mobile menu and dropdown
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Categories state
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  const dropdownRef = useRef(null);

  // Fetch categories on mount
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

  // Close dropdown when clicking outside
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
    // Close mobile menu if open
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg py-4 animate-fadeInUp">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold text-white">
            E-Shop
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/products"
              className="text-white font-medium hover:text-gray-200 transition-colors"
            >
              Products
            </Link>
            {/* Categories Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="text-white font-medium hover:text-gray-200 transition-colors focus:outline-none"
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
                        className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors capitalize"
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
              className="text-white font-medium hover:text-gray-200 transition-colors"
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
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
            <LightDarkToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/products"
                className="text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen((prev) => !prev)}
                  className="text-white font-medium focus:outline-none"
                >
                  Categories
                </button>
                {dropdownOpen && (
                  <div className="mt-2 w-full bg-white dark:bg-gray-800 rounded shadow-lg z-10">
                    {loadingCategories ? (
                      <div className="p-2 text-gray-600 dark:text-gray-300">
                        Loading...
                      </div>
                    ) : (
                      categories.map((category) => (
                        <Link
                          key={category}
                          to={`/category/${encodeURIComponent(category)}`}
                          onClick={() => {
                            setDropdownOpen(false);
                            setMobileMenuOpen(false);
                          }}
                          className="block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors capitalize"
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
                className="text-white font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cart
              </Link>
              {user ? (
                <>
                  <span className="text-white font-medium">
                    Hi, {user.username}
                  </span>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMobileMenuOpen(false);
                    }}
                    className="px-3 py-1 bg-red-600 text-white rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="px-3 py-1 bg-green-600 text-white rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
              <LightDarkToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
