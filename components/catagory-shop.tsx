"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface CategoryItem {
  src: string;
  label: string;
  color: string;
}

const categories: CategoryItem[] = [
  {
    src: "/food-slide-show/fresh-fruits.jpg",
    label: "Fresh Fruits",
    color: "bg-emerald-500",
  },
  {
    src: "/food-slide-show/organic-vegetables.jpg",
    label: "Organic Vegetables",
    color: "bg-lime-500",
  },
  {
    src: "/food-slide-show/dairy-products.jpg",
    label: "Dairy Products",
    color: "bg-blue-400",
  },
  {
    src: "/food-slide-show/baked-goods.jpg",
    label: "Baked Goods",
    color: "bg-amber-400",
  },
  {
    src: "/food-slide-show/fresh-meat.jpg",
    label: "Fresh Meat",
    color: "bg-red-400",
  },
  {
    src: "/food-slide-show/sea-food.jpg",
    label: "Seafood",
    color: "bg-cyan-400",
  },
  {
    src: "/food-slide-show/beaverage.jpg",
    label: "Beverages",
    color: "bg-purple-400",
  },
  {
    src: "/food-slide-show/snacks.jpeg",
    label: "Snacks",
    color: "bg-yellow-400",
  },
  {
    src: "/food-slide-show/ethiopian-spices.jpg",
    label: "Spices & Seasonings",
    color: "bg-orange-400",
  },
];

export default function PremiumCategoryShowcase() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [itemCount, setItemCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemCount(window.innerWidth < 768 ? 3 : 4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxStartIndex = Math.max(0, categories.length - itemCount);

  const getVisibleItems = () => {
    const start = Math.max(0, Math.min(startIndex, maxStartIndex));
    return categories.slice(start, start + itemCount);
  };

  const handleDotClick = (index: number) => {
    setDirection(index > startIndex ? "right" : "left");
    setStartIndex(index);
  };

  const scrollTo = (dir: "left" | "right") => {
    setDirection(dir);
    setStartIndex((prev) =>
      dir === "left" ? Math.max(0, prev - 1) : Math.min(maxStartIndex, prev + 1)
    );
  };

  const totalDots = Math.max(1, categories.length - itemCount + 1);

  const variants = {
    enter: (direction: string) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: "0%",
      opacity: 1,
    },
    exit: (direction: string) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative py-16 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
            Shop By Category
          </span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our premium selection of fresh products
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation arrows */}
        <button
          onClick={() => scrollTo("left")}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg transition-colors z-10 
    ${
      startIndex === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100 hover:cursor-pointer"
    }`}
          disabled={startIndex === 0}
        >
          <ChevronLeft className="text-gray-800" />
        </button>

        {/* Carousel */}
        <div className="w-full flex justify-center md:-ml-28 ">
          <div className="relative h-66 w-full max-w-10xl mx-auto overflow-hidden ">
            <AnimatePresence custom={direction} initial={false}>
              {getVisibleItems().map((item, index) => (
                <motion.div
                  key={`${item.label}-${startIndex}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`absolute w-54 h-54 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all ${item.color}`}
                  style={{
                    left: `calc(50% + ${
                      (index - (itemCount - 1) / 2) * 280
                    }px)`,
                    transform: "translateX(-50%)",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">{item.label}</h3>
                      <button className="mt-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                        Shop Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={() => scrollTo("right")}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg transition-colors z-10 
    ${
      startIndex >= maxStartIndex
        ? "cursor-not-allowed opacity-50 "
        : "hover:bg-gray-100 hover:cursor-pointer"
    }`}
          disabled={startIndex >= maxStartIndex}
        >
          <ChevronRight className="text-gray-800" />
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors hover:cursor-pointer ${
              startIndex === index ? "bg-orange-500" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
