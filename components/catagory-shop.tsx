"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface CategoryItem {
  src: string;
  label: string;
  color: string;
}

const categories: CategoryItem[] = [
  { src: "/food-slide-show/fresh-fruits.jpg", label: "Fresh Fruits", color: "bg-emerald-500" },
  { src: "/food-slide-show/organic-vegetables.jpg", label: "Organic Vegetables", color: "bg-lime-500" },
  { src: "/food-slide-show/dairy-products.jpg", label: "Dairy Products", color: "bg-blue-400" },
  { src: "/food-slide-show/baked-goods.jpg", label: "Baked Goods", color: "bg-amber-400" },
  { src: "/food-slide-show/fresh-meat.jpg", label: "Fresh Meat", color: "bg-red-400" },
  { src: "/food-slide-show/sea-food.jpg", label: "Seafood", color: "bg-cyan-400" },
  { src: "/food-slide-show/beaverage.jpg", label: "Beverages", color: "bg-purple-400" },
  { src: "/food-slide-show/snacks.jpeg", label: "Snacks", color: "bg-yellow-400" },
  { src: "/food-slide-show/ethiopian-spices.jpg", label: "Spices & Seasonings", color: "bg-orange-400" },
];

export default function PremiumCategoryShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 200], [-5, 5]);

  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = carouselRef.current?.getBoundingClientRect();
    if (rect) {
      const xVal = e.clientX - rect.left;
      const centerX = rect.width / 2;
      x.set((xVal - centerX) / 30);
    }
  };

  // Drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMoveDrag = (e: MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const dx = e.clientX - dragStartX.current;
    carouselRef.current.scrollLeft = scrollStartX.current - dx;
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMoveDrag);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMoveDrag);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const scrollTo = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
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
          onClick={() => scrollTo('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronLeft className="text-gray-800" />
        </button>
        
        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          style={{ rotateY }}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          className="w-full overflow-x-scroll snap-x snap-mandatory hide-scrollbar"
        >
          <div className="inline-flex space-x-6 px-8">
            {categories.map((item, index) => (
              <motion.div
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative w-64 h-64 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg hover:shadow-xl transition-all snap-center ${item.color}`}
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
          </div>
        </motion.div>

        <button 
          onClick={() => scrollTo('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <ChevronRight className="text-gray-800" />
        </button>
      </div>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}