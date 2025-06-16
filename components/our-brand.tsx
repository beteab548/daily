"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiZoomIn,
  FiShoppingCart,
} from "react-icons/fi";
import Image from "next/image";

type Product = {
  id: number;
  src: string;
  label: string;
  description: string;
  category: string;
  features: string[];
};

const products: Product[] = [
  {
    id: 1,
    src: "/special-products/aqua.jpg",
    label: "Aqua Mineral Water",
    description: "Sourced from Ethiopian mountain springs",
    category: "Water",
    features: ["Natural minerals", "PH balanced", "BPA-free bottle"],
  },
  {
    id: 2,
    src: "/special-products/dukemiye.jpg",
    label: "Dukem Premium Food Oil",
    description: "100% pure Ethiopian sesame oil for authentic flavors",
    category: "Pantry Essentials",
    features: ["Cold-pressed", "Rich in antioxidants", "No additives"],
  },
  {
    id: 3,
    src: "/special-products/naturamilk.jpg",
    label: "Natura Farm Fresh Milk",
    description: "Pasteurized milk from grass-fed Ethiopian cows",
    category: "Dairy",
    features: ["Hormone-free", "Vitamin D enriched", "1L bottle"],
  },
  {
    id: 4,
    src: "/special-products/royaltonic.jpg",
    label: "Royal Tonic Drink",
    description: "Herbal energy drink with natural ingredients",
    category: "Beverages",
    features: ["No artificial sweeteners", "Herbal blend", "330ml can"],
  },
  {
    id: 5,
    src: "/special-products/orangeRoyalTonic.jpg",
    label: "Orange Royal Tonic Drink",
    description: "Refreshing orange-flavored herbal energy drink",
    category: "Beverages",
    features: ["Natural orange extract", "Caffeine-free", "330ml can"],
  },
  {
    id: 6,
    src: "/special-products/Yogurt.png",
    label: "Natura Yogurt",
    description: "Natually fermented yogurt with live cultures",
    category: "Dairy",
    features: ["Probiotic-rich", "Low-fat", "500g tub"],
  },
  {
    id: 7,
    src: "/special-products/butter.png",
    label: "Natura butter",
    description: "Rich and creamy butter made from fresh milk",
    category: "Dairy",
    features: ["No artificial preservatives", "Rich in vitamins", "200g pack"],
  },
  {
    id: 8,
    src: "/special-products/naturacreame.png",
    label: "Natura Cream",
    description: "Rich and creamy dairy product for cooking and baking",
    category: "Dairy",
    features: ["Rich in calcium", "Versatile for recipes", "250g tub"],
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("All");
  const [isAnimating, setIsAnimating] = useState(false);
  const [featuredProduct, setFeaturedProduct] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const filteredProducts = products.filter((product) => {
    if (activeFilter === "All") {
      if (product.id === 5) return false;
      if (product.category === "Dairy") {
        return (
          product.label.includes("Milk") || product.label.includes("Yogurt")
        );
      }
      return true;
    }

    
    if (activeFilter === "Dairy") {
      return product.category === "Dairy";
    }

    if (activeFilter === "Beverages") {
      return product.category === "Beverages";
    }

    return product.category === activeFilter;
  });

  useEffect(() => {
    if (filteredProducts.length > 0) {
      const newIndex = Math.min(featuredProduct, filteredProducts.length - 1);
      setFeaturedProduct(newIndex);
    } else {
      setFeaturedProduct(0);
    }
  }, [filteredProducts, featuredProduct]);

  useEffect(() => {
    setIsMounted(true);
    setTimeout(() => {
      window.scrollBy(0, 1);
      setTimeout(() => window.scrollBy(0, -1), 100);
    }, 300);
  }, []);

  const handlePrev = useCallback(() => {
    if (isAnimating || filteredProducts.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [filteredProducts.length, isAnimating]);

  const handleNext = useCallback(() => {
    if (isAnimating || filteredProducts.length === 0) return;
    setIsAnimating(true);
    setCurrentIndex((prev) =>
      prev === filteredProducts.length - 1 ? 0 : prev + 1
    );
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [filteredProducts.length, isAnimating]);

  const openLightbox = useCallback(
    (index: number) => {
      if (index >= 0 && index < filteredProducts.length) {
        setCurrentIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = "hidden";
      }
    },
    [filteredProducts.length]
  );

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const selectFeatured = useCallback(
    (index: number) => {
      if (index >= 0 && index < filteredProducts.length) {
        setFeaturedProduct(index);
      }
    },
    [filteredProducts.length]
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      switch (e.key) {
        case "Escape":
          closeLightbox();
          break;
        case "ArrowLeft":
          handlePrev();
          break;
        case "ArrowRight":
          handleNext();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, handlePrev, handleNext, closeLightbox]);

  return (
    <section className="relative py-20  px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-6 leading-tight">
            Products Made By us Showcase
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our curated selection of authentic Ethiopian products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true, margin: "-50px 0px 0px 0px" }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-orange-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border hover:cursor-pointer"
              }`}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Empty state */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found in this category</p>
          </div>
        ) : (
          /* Main Gallery Layout */
          <div className="flex flex-col lg:flex-row gap-8 mb-20">
            {/* Left Column - Thumbnails */}
            <div className="lg:w-2/5 flex flex-col gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                  className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${
                    featuredProduct === index ? "ring-2 ring-orange-500" : ""
                  }`}
                  onClick={() => selectFeatured(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Select ${product.label}`}
                  onKeyDown={(e) => e.key === "Enter" && selectFeatured(index)}
                >
                  <div className="flex">
                    <div className="w-1/3 h-32 relative">
                      <Image
                        src={product.src}
                        alt={product.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = "none";
                        }}
                      />
                    </div>
                    <div className="w-2/3 p-4 bg-white">
                      <span className="text-xs text-emerald-600 font-medium">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-semibold text-gray-800 mt-1">
                        {product.label}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <button
                          className="text-emerald-600 hover:text-emerald-800 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add to cart logic here
                          }}
                          aria-label={`Add ${product.label} to cart`}
                        >
                          <FiShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Column - Featured Product */}
            <motion.div
              className="lg:w-3/5 relative rounded-2xl overflow-hidden shadow-xl bg-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px 0px 0px 0px" }}
            >
              <div className="h-[500px] relative">
                {filteredProducts[featuredProduct]?.src ? (
                  <Image
                    src={filteredProducts[featuredProduct].src}
                    alt={filteredProducts[featuredProduct].label}
                    fill
                    className="object-cover"
                    priority={featuredProduct < 2}
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <div className="bg-gray-100 w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">Image not available</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-8">
                  <div>
                    <span className="text-emerald-300 font-medium">
                      {filteredProducts[featuredProduct]?.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-2">
                      {filteredProducts[featuredProduct]?.label}
                    </h3>
                    <p className="text-emerald-100 mt-2">
                      {filteredProducts[featuredProduct]?.description}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <button
                        className="px-6 py-3 bg-orange-400 hover:cursor-pointer hover:bg-orange-500 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                        onClick={() => openLightbox(featuredProduct)}
                        aria-label="Zoom in on product image"
                      >
                        <FiZoomIn />
                        View Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product features */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredProducts[featuredProduct]?.features.map(
                    (feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-2000 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
          >
            <h2 id="lightbox-title" className="sr-only">
              Product image viewer
            </h2>

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 hover:cursor-pointer right-6 text-white hover:text-emerald-400 transition-colors"
              aria-label="Close lightbox"
            >
              <FiX size={28} />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white hover:text-emerald-400 transition-colors z-10 p-2 bg-black/30 rounded-full"
              aria-label="Previous image"
              disabled={isAnimating || filteredProducts.length <= 1}
            >
              <FiChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 text-white hover:text-emerald-400 transition-colors z-10 p-2 bg-black/30 rounded-full"
              aria-label="Next image"
              disabled={isAnimating || filteredProducts.length <= 1}
            >
              <FiChevronRight size={32} />
            </button>

            {/* Main image container */}
            <motion.div
              key={filteredProducts[currentIndex]?.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-full max-h-[80vh]"
            >
              {filteredProducts[currentIndex]?.src ? (
                <Image
                  src={filteredProducts[currentIndex].src}
                  alt={filteredProducts[currentIndex].label}
                  fill
                  className="object-contain"
                  priority
                />
              ) : (
                <div className="bg-gray-800 w-full h-full flex items-center justify-center">
                  <span className="text-white">Image not available</span>
                </div>
              )}
            </motion.div>

            {/* Caption */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-0 right-0 text-center text-white"
            >
              <h3 className="text-2xl font-bold">
                {filteredProducts[currentIndex]?.label}
              </h3>
              <p className="text-gray-300 mt-2 max-w-md mx-auto">
                {filteredProducts[currentIndex]?.description}
              </p>
            </motion.div>

            {/* Thumbnail strip */}
            {filteredProducts.length > 1 && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {filteredProducts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-emerald-400 w-6"
                        : "bg-white/30"
                    }`}
                    aria-label={`View image ${index + 1}`}
                    disabled={isAnimating}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
