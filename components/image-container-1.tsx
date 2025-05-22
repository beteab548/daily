"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ShoppingCart, Sparkles, ArrowRight, Leaf, Award, Zap } from "lucide-react";
import React from "react";

function CosmicShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 200], [-8, 8]);
  const scale = useTransform(x, [-200, 0, 200], [1.02, 1, 1.02]);

  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const xVal = e.clientX - rect.left;
      const centerX = rect.width / 2;
      x.set((xVal - centerX) / 10);
    }
  };

  // Premium features
  const features = [
    { 
      icon: <Leaf className="text-emerald-400" />, 
      title: "Farm Fresh", 
      text: "Harvested at peak ripeness",
      color: "from-emerald-400/20 to-emerald-600/10"
    },
    { 
      icon: <Award className="text-amber-400" />, 
      title: "Premium Quality", 
      text: "Rigorously tested",
      color: "from-amber-400/20 to-amber-600/10"
    }
  ];

  // Auto-rotate features
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveFeature(prev => (prev + 1) % features.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, features.length]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    containerRef.current && observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 15
      }
    }
  };

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { 
        delay: 0.3,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="relative py-28 px-4 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-200/30 to-emerald-200/30"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              width: Math.random() * 400 + 100 + 'px',
              height: Math.random() * 400 + 100 + 'px',
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Main container with 3D tilt */}
      <motion.div
        ref={containerRef}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); x.set(0) }}
        style={{ rotateY, scale }}
        className="mx-auto max-w-6xl relative z-10"
      >
        <div className="flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border border-gray-100/50 backdrop-blur-sm">
          {/* Image Section - Parallax Enhanced */}
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/2 relative h-[400px] lg:h-[500px] overflow-hidden"
          >
            <motion.div 
              animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                fill
                src="/cards/IMG_7704.jpg"
                alt="Daily Mart Store"
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Animated overlay */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-8"
                >
                  <motion.div
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-white"
                  >
                    <ShoppingCart size={40} className="mb-3" />
                    <h3 className="text-2xl font-bold">Experience Excellence</h3>
                    <p className="text-amber-100">Quality you can taste</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Text Section - Premium Content */}
          <motion.div
            variants={textVariants}
            className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center bg-gradient-to-br from-white to-amber-50 relative"
          >
            {/* Animated underline */}
            <motion.div 
              animate={isHovered ? { width: "100%" } : { width: "30%" }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 left-0 h-1 bg-gradient-to-r from-amber-400 to-orange-500"
            />

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Beyond Ordinary
              </span>
              <br />
              <span className="text-gray-900">Grocery Experience</span>
            </h2>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              At <span className="font-bold text-amber-600">Daily Mart</span>, we've redefined grocery shopping with our hand-picked selection of premium products. Our experts travel countrywide to bring you exceptional quality you won't find elsewhere.
            </p>

            {/* Interactive Feature Showcase */}
            {/* Interactive Feature Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: 0.5 + i * 0.2 }
                  }}
                  whileHover={{ 
                    y: -5,
                    backgroundColor: i === 0 ? "rgba(52, 211, 153, 0.1)" : "rgba(251, 191, 36, 0.1)"
                  }}
                  className={`min-w-0 p-4 md:p-5 rounded-xl border cursor-default transition-all ${
                    activeFeature === i 
                      ? `bg-gradient-to-br ${feature.color} border-transparent shadow-md`
                      : "border-gray-200 bg-white"
                  }`}
                  onMouseEnter={() => setActiveFeature(i)}
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className={`p-2 md:p-3 rounded-full ${
                      activeFeature === i 
                        ? i === 0 ? "bg-emerald-500" : "bg-amber-500"
                        : "bg-gray-100"
                    } transition-colors`}>
                      {React.cloneElement(feature.icon, {
                        className: `${activeFeature === i ? "text-white" : i === 0 ? "text-emerald-500" : "text-amber-500"}`
                      })}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-gray-800 text-base md:text-lg truncate">{feature.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm">{feature.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Ultra-Premium Button */}
            <motion.button
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold flex items-center gap-3 z-10"
            >
              {/* Hover Overlay - move it under text */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>

              {/* Content */}
              <span className="z-10 relative">Premium Selection</span>
              <motion.div
                animate={isHovered ? { x: [0, 5, -3, 5, 0] } : { x: 0 }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="z-10 relative"
              >
                <Zap className="fill-white text-white group-hover:animate-pulse" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating decorative elements */}
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              initial={{ y: 100, x: -50, opacity: 0, rotate: -30 }}
              animate={{ y: -50, x: -30, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.7, duration: 0.8, type: 'spring' }}
              className="absolute bottom-20 left-10 text-6xl z-0 pointer-events-none"
            >
              🍊
            </motion.div>
            <motion.div
              initial={{ y: 100, x: 50, opacity: 0, rotate: 30 }}
              animate={{ y: -30, x: 30, opacity: 1, rotate: 0 }}
              transition={{ delay: 0.9, duration: 0.8, type: 'spring' }}
              className="absolute top-20 right-10 text-6xl z-0 pointer-events-none"
            >
              🥑
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CosmicShowcase;
