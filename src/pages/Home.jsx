import React from "react";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1591012897683-4c319d9e5ad3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white animate-fadeInUp">
            Welcome to E-Shop
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-200 animate-fadeInUp delay-200">
            Discover exclusive deals and unique products.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors animate-fadeInUp delay-400">
            Shop Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8 animate-fadeInUp">
            Why Shop With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow animate-fadeInUp">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 2a2 2 0 00-2 2v1H4a2 2 0 00-2 2v1h16V7a2 2 0 00-2-2h-4V4a2 2 0 00-2-2zM2 13a2 2 0 012-2h12a2 2 0 012 2v5H2v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Quality Products
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer a curated selection of high-quality products that meet
                your needs.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow animate-fadeInUp delay-200">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Secure Shopping
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your security is our priority. Shop with confidence knowing your
                data is protected.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow animate-fadeInUp delay-400">
              <div className="mb-4">
                <svg
                  className="w-12 h-12 mx-auto text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 5a2 2 0 012-2h3.28a2 2 0 011.92 1.37l.82 2.46a2 2 0 001.92 1.37H14a2 2 0 012 2v1H2V5z" />
                  <path d="M2 12h16v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Experience swift and reliable delivery service right to your
                doorstep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8 animate-fadeInUp">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow animate-fadeInUp">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "E-Shop exceeded my expectations. The product quality is
                fantastic and the delivery was super fast!"
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                - John Doe
              </h3>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow animate-fadeInUp delay-200">
              <p className="text-gray-600 dark:text-gray-300 italic">
                "A seamless shopping experience with a modern and user-friendly
                interface. Highly recommended!"
              </p>
              <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                - Jane Smith
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
