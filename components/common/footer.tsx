"use client";
import Link from "next/link";
import {
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  FaArrowUp,
  FaTiktok,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: <FaFacebook size={20} />,
      label: "Facebook",
      url: "https://web.facebook.com/Dailyminimart0",
    },
    {
      icon: <FaTiktok size={20} />,
      label: "Tiktok",
      url: "https://www.tiktok.com/@daily.mini.mart",
    },
    {
      icon: <FaInstagram size={20} />,
      label: "Instagram",
      url: "https://www.instagram.com/daily.mini_mart?igsh=NWtoeDl0Y2d6MnNi",
    },
  ];
  const quickLinks = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "About Us", url: "/about-us" },
    { name: "Gallery", url: "/gallery" },
  ];
  const locations = [
    { name: "Bisrate Gebriel", address: "Behind Lafto Mall" },
    { name: "Bole", address: "Near Ramada Hotel" },
    { name: "Kazanchis", address: "ECA Main Gate" },
    { name: "Semit", address: "Near Viva Beverage Factory" },
    { name: "bulbula", address: "Near Janboro Real state" },
    { name: "Gerji MeberatHaile", address: "Coming Soon " },
  ];
  const contactInfo = [
    { icon: <FaPhone />, content: ["+251 934 567 890", "+251 911 234 567"] },
    {
      icon: <MdEmail />,
      content: ["info@dailyminimart.com", "support@dailyminimart.com"],
    },
    {
      icon: <FaHome />,
      content: ["Open Daily: 7AM - 10PM", "Holidays: 7AM - 12PM"],
    },
  ];
  return (
    <footer
      ref={ref}
      className="w-full bg-gradient-to-b from-gray-50 to-emerald-50 pt-16 pb-8 border-t border-gray-200"
      aria-label="Website footer"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12"
        >
          {/* About Us */}
          <motion.div variants={itemVariants} className="space-y-5">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
              <h3 className="text-2xl font-bold text-emerald-800 bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                Daily Grocery Store
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your neighborhood destination for fresh groceries We're committed
              to quality, convenience, and community.
            </p>
            <div className="flex space-x-4 pt-1">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.url}
                  target="_blank"
                  className="text-gray-500 hover:text-emerald-600 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-xl font-semibold text-gray-800">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-gray-600 hover:text-emerald-600 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 group-hover:scale-125 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Locations */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-xl font-semibold text-gray-800">
              Our Locations
            </h3>
            <ul className="space-y-4">
              {locations.map((location, index) => (
                <li key={index} className="flex items-start">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0"
                  >
                    <FaMapMarkerAlt />
                  </motion.div>
                  <div>
                    <p className="font-medium text-gray-700">{location.name}</p>
                    <p className="text-sm text-gray-500">{location.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-5">
            <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="text-emerald-500 mt-0.5 mr-3 flex-shrink-0"
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    {info.content.map((text, i) => (
                      <p key={i} className="text-gray-600 text-sm leading-snug">
                        {text}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="border-t border-gray-200 my-8"
        ></motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Daily Grocery Store. All rights
              reserved.
            </p>
            
            <div className="flex space-x-4">
              <Link
                href="/privacy"
                className="text-sm text-gray-500 hover:text-emerald-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-500 hover:text-emerald-600"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          <p className="text-transparent selection:text-black text-sm">
            Made by Beteab Baynessagne
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 5px 15px rgba(5, 150, 105, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 px-5 py-2.5 rounded-full shadow-lg transition-all hover:cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
