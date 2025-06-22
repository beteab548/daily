"use client";
import Image from "next/image";
import CustomMap from "@/components/customMap.jsx";
import { motion } from "framer-motion";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AboutMiniMarket = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#map") {
      const element = document.getElementById("map-section");
      if (element) {
        console.log("hash is #map");
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 200); // wait a bit for render
      }
    }
  }, [pathname, searchParams]);

  return (
    <section className="relative py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-amber-600 to-orange-600 opacity-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Discover Our Mini Market
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image with hover effect */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <Image
              src="/cards/IMG_7730.jpg"
              alt="Mini Market Interior"
              width={800}
              height={600}
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <p className="text-sm font-medium bg-emerald-500 px-3 py-1 rounded-full inline-block">
                Since 2020
              </p>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800">
              Your Neighborhood Fresh Market
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Established in the vibrant center of Addis Ababa, Daily Mart is
              more than just a grocery store we are an essential part of your
              everyday life. We are dedicated to providing quality products,
              excellent service, fair prices, and convenient locations to every
              home across Addis Ababa.
            </p>
            <p className="text-gray-600 leading-relaxed">
              At Daily Mart, we believe that shopping should be simple,
              reliable, and accessible for everyone. Our mission is to provide
              customers with high-quality groceries and essentials at affordable
              prices. And Our Vision is To become our customers' most trusted
              and preferred place for buying quality products, known for great
              service and a wide selection
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <svg
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700">Fresh Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700">Open 7 Days</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-full">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700">Friendly Staff</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                </div>
                <span className="text-gray-700">Great Prices</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Our Products
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide variety of fresh and high-quality products to meet
              all your daily needs
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Fresh Fruits and Vegetables */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-emerald-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-emerald-100 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Fresh Produce
                </h4>
              </div>
              <p className="text-gray-600">
                Seasonal fruits and vegetables, locally sourced for maximum
                freshness and flavor.
              </p>
            </motion.div>

            {/* Meat Products */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-red-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-100 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Meat Products
                </h4>
              </div>
              <p className="text-gray-600">
                Premium quality beef, veal, lamb, and mutton, carefully selected
                and properly stored.
              </p>
            </motion.div>

            {/* Poultry and Seafood */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Poultry & Seafood
                </h4>
              </div>
              <p className="text-gray-600">
                Fresh chicken, turkey, and a selection of seafood delivered
                regularly.
              </p>
            </motion.div>

            {/* Grocery Items */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-amber-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-amber-100 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-amber-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Grocery Items
                </h4>
              </div>
              <p className="text-gray-600">
                Wide selection of both local and imported pantry staples and
                specialty items.
              </p>
            </motion.div>

            {/* Bakery Products */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-yellow-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-yellow-100 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Bakery Products
                </h4>
              </div>
              <p className="text-gray-600">
                Freshly baked bread, pastries, and desserts made daily with
                quality ingredients.
              </p>
            </motion.div>

            {/* Beverages */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-purple-500"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 rounded-lg mr-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">
                  Beverages
                </h4>
              </div>
              <p className="text-gray-600">
                Variety of non-alcoholic drinks including juices, sodas, waters,
                and specialty beverages.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-3">
                Other Services
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Bulk orders */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-amber-500">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-amber-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Bulk Orders
                  </h4>
                </div>
                <p className="text-gray-600">
                  For events and offices with special pricing and delivery
                  options.
                </p>
              </div>

              {/* Weekly deals */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Weekly Deals
                  </h4>
                </div>
                <p className="text-gray-600">
                  Discounts and combo offers updated weekly for maximum savings.
                </p>
              </div>

              {/* Loyalty program */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-purple-100 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Loyalty Program
                  </h4>
                </div>
                <p className="text-gray-600">
                  Earn points with every purchase and redeem them for exciting
                  rewards.
                </p>
              </div>

              {/* Gift baskets */}
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-emerald-500">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-emerald-100 rounded-full mr-4">
                    <svg
                      className="w-6 h-6 text-emerald-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      ></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Gift Baskets
                  </h4>
                </div>
                <p className="text-gray-600">
                  Custom arrangements for holidays and special occasions, made
                  to order.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
          id="map-section"
        >
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Our Locations
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Visit us at one of our convenient locations. We're always nearby
              when you need us!
            </p>
            <div className="h-96 w-full rounded-xl overflow-hidden border border-gray-200">
              <motion.div
                // 👈 Unique ID to scroll to
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <CustomMap />
              </motion.div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMiniMarket;
