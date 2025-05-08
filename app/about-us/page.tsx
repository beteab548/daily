"use client";
import Image from "next/image";
import CustomMap from "@/components/customMap.jsx";
import { motion } from "framer-motion";

const AboutMiniMarket = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-10"></div>
      
      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
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
              Welcome to our Mini Market, where quality meets convenience! We offer a 
              variety of fresh produce, snacks, beverages, and household essentials.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to provide you with a seamless shopping experience with a 
              focus on freshness and customer satisfaction. Whether you're looking for 
              a quick snack or weekly groceries, we have you covered.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-emerald-100 rounded-full">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Fresh Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Open 7 Days</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-amber-100 rounded-full">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Friendly Staff</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Great Prices</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Our Locations</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Visit us at one of our convenient locations. We're always nearby when you need us!
            </p>
            <div className="h-96 w-full rounded-xl overflow-hidden border border-gray-200">
              <CustomMap />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <button className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors">
                Get Directions
              </button>
              <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors">
                Store Hours
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMiniMarket;