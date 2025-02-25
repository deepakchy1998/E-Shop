# E-Shop: Frontend‑Only E‑Commerce Application

## Overview
E-Shop is a fully functional e‑commerce website built entirely on the frontend using React (via Vite) and styled with Tailwind CSS. It simulates a complete shopping experience—including user authentication, product listing, cart management, checkout, and order confirmation—using localStorage for data persistence and the [FakeStoreAPI](https://fakestoreapi.com) for product data.

## Features

- **User Authentication (Simulated):**
  - Register and log in using forms.
  - User credentials are stored in localStorage.
  - The AuthContext manages user state and provides login, register, and logout functions.
  - The Navbar displays the username when logged in.

- **Product Listing & Details:**
  - Products and categories are fetched from the FakeStoreAPI using Axios.
  - Responsive product cards with smooth animations.
  - Detailed product view with description, price, and "Add to Cart" functionality.

- **Cart Management:**
  - The CartContext manages cart state (stored in localStorage).
  - Users can add, update, remove items, and clear the cart.
  - The cart page displays all items with dynamic total calculation.

- **Checkout Flow:**
  - Checkout page with a shipping details form (full name, address, city, postal code, country).
  - After order placement, the cart is cleared and an order confirmation page is displayed.

- **Categories Dropdown:**
  - The Navbar features a dropdown that dynamically loads product categories from the FakeStoreAPI.
  - Clicking a category navigates to a page showing products filtered by that category.

- **UI & Animations:**
  - Built with Tailwind CSS for a modern, responsive design.
  - Custom animations (e.g., fadeInUp) and smooth hover transitions.
  - Dark/Light mode toggle for a personalized user experience.

## Technologies Used

- **React** (via Vite) for the UI.
- **Tailwind CSS** for styling and animations.
- **Axios** for API calls.
- **React Router** for client-side routing.
- **FakeStoreAPI** as the data source.
- **localStorage** for simulated persistence (authentication and cart).

## Project Structure

client/ ├── index.html ├── package.json ├── postcss.config.cjs ├── tailwind.config.js └── src/ ├── main.jsx ├── index.css ├── App.jsx ├── contexts/ │ ├── ThemeContext.jsx │ ├── AuthContext.jsx │ └── CartContext.jsx ├── components/ │ ├── Navbar.jsx │ ├── Footer.jsx │ ├── LightDarkToggle.jsx │ └── ProductCard.jsx ├── pages/ │ ├── Home.jsx │ ├── Products.jsx │ ├── ProductDetails.jsx │ ├── Cart.jsx │ ├── Checkout.jsx │ ├── OrderConfirmation.jsx │ ├── Login.jsx │ ├── Register.jsx │ └── CategoryProducts.jsx └── services/ └── api.js


## Installation & Usage

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/e-shop.git

2. Navigate to the client folder:
   cd e-shop/client

3. Install dependencies:
   npm install

4. Run the development server:
   npm run dev
   Open http://localhost:3000 to view the application.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
>>>>>>> 6a2511e (only upload project!)
