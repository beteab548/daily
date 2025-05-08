'use client'
import Link from "next/link";
import { FaFacebook, FaPhone, FaMapMarkerAlt, FaHome, FaArrowUp, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 to-emerald-50 pt-12 pb-6 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* About Us */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-emerald-700 flex items-center">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
              Daily Mini Mart
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your neighborhood destination for fresh groceries and household essentials. 
              We're committed to quality, convenience, and community.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-emerald-600 transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-800">Our Locations</h3>
            <ul className="space-y-3">
              {['Bisrate Gebriel', 'Bole', 'Kazanchis', 'Semit'].map((location, index) => (
                <li key={index} className="flex items-start">
                  <FaMapMarkerAlt className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">{location}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaPhone className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-gray-600">+251 934 567 890</p>
                  <p className="text-gray-600">+251 911 234 567</p>
                </div>
              </li>
              <li className="flex items-start">
                <MdEmail className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">dailyminimart@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaHome className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">Open Daily: 7AM - 10PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Daily Mini Mart. All rights reserved.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-full shadow-md transition-all"
          >
            <FaArrowUp />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;