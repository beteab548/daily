"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
const images = [
  "/cards/IMG_7731.jpg",
  "/slider2-.webp",
  "/slider3.webp",
];

const captions = [
  "Premium Quality Products",
  "Fresh From Our Farms",
  "Delivered To Your Doorstep"
];

export default function CosmicImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const timerRef = useRef<NodeJS.Timeout| null>(null);

  // Star particles effect
  const particles = Array(15).fill(0).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5
  }));

  // Auto-rotate slides
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setDirection("right");
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        if (timerRef.current) {
          if (timerRef.current) {
            if (timerRef.current) {
              if (timerRef.current) {
                clearInterval(timerRef.current as NodeJS.Timeout);
              }
            }
          }
        }
      }
    };
  }, [isHovered]);

  const goToSlide = (index: number, dir: "left" | "right") => {
    setDirection(dir);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % images.length);
    resetTimer();
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    resetTimer();
  };

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
  };

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated star background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-white/80"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Main slider container */}
      <div className="relative h-full w-full flex items-center justify-center">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction === "right" ? "100%" : "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction === "right" ? "-100%" : "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              fill
              className="object-cover"
              onLoadingComplete={() => setIsLoading(false)}
              priority
            />
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Caption */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-1/4 left-0 right-0 text-center z-10 px-4"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
            {captions[currentIndex]}
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full font-bold flex items-center gap-2 mx-auto shadow-xl hover:shadow-2xl transition-all"
          >
            <Zap className="animate-pulse" /> SHOP NOW
          </motion.button>
        </motion.div>

        {/* Navigation dots */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index, index > currentIndex ? "right" : "left")}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-amber-400 w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full z-10 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={32} />
        </button>

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full"
            />
          </div>
        )}
      </div>

      {/* Floating sparkles */}
      <motion.div 
        className="absolute top-1/4 right-1/4 text-amber-300"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Sparkles size={48} />
      </motion.div>
    </div>
  );
}