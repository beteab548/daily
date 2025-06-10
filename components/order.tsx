"use client";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ShoppingCart,
  Smartphone,
  Store,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function UltraOrderSection({ image }: { image: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeButton, setActiveButton] = useState<null | number>(null);
  const [showStoreHours, setShowStoreHours] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  // Reduced rotation range and adjusted scale
  const rotateY = useTransform(x, [-50, 50], [-3, 3]);
  const scale = useTransform(x, [-50, 0, 50], [1.01, 1, 1.01]);

  // More constrained 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const xVal = e.clientX - rect.left;
    const centerX = rect.width / 2;
    // More constrained movement with smoother response
    const constrainedX = Math.min(Math.max((xVal - centerX) / 25, -50), 50);
    x.set(constrainedX);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [controls]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      y: -5,
      transition: { duration: 0.2 },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  };
const StoreHoursModal = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    onClick={() => setShowStoreHours(false)}
  >
    
    <motion.div
      className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative overflow-hidden"
      onClick={(e) => e.stopPropagation()}
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 300 }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400" />
      <div className="absolute -top-10 -right-10 text-amber-200/30">
        <Store size={120} />
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <Store className="text-amber-500" size={24} />
          Our Store Hours
        </h3>

        <div className="space-y-4">
          {/* Summit and Bole locations */}
          <motion.div
            className="flex flex-col py-3 px-4 bg-gray-50 rounded-lg border-l-4 border-amber-500"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.1 },
            }}
            whileHover={{
              backgroundColor: "rgba(251, 191, 36, 0.1)",
            }}
          >
            <span className="font-bold text-gray-800">Summit & Bole Locations</span>
            <div className="flex justify-between mt-2">
              <span className="font-medium text-gray-700">Monday - Sunday</span>
              <span className="font-semibold text-amber-600">7:00 AM - 10:00 PM</span>
            </div>
          </motion.div>

          {/* Other locations */}
          <motion.div
            className="flex flex-col py-3 px-4 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.2 },
            }}
            whileHover={{
              backgroundColor: "rgba(251, 191, 36, 0.1)",
              borderLeft: "4px solid #f59e0b",
            }}
          >
            <span className="font-bold text-gray-800">All Other Locations</span>
            <div className="flex justify-between mt-2">
              <span className="font-medium text-gray-700">Monday - Sunday</span>
              <span className="font-semibold text-amber-600">7:00 AM - 9:00 PM</span>
            </div>
          </motion.div>

          {/* Holiday hours */}
          <motion.div
            className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg"
            initial={{ opacity: 0, x: -10 }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.3 },
            }}
            whileHover={{
              backgroundColor: "rgba(251, 191, 36, 0.1)",
              borderLeft: "4px solid #f59e0b",
            }}
          >
            <span className="font-medium text-gray-700">Holidays</span>
            <span className="font-semibold text-amber-600">7:00 AM - 12:00 PM</span>
          </motion.div>
        </div>

        <motion.button
          onClick={() => setShowStoreHours(false)}
          className="mt-8 w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-lg transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={sectionRef}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          x.set(0);
          setActiveButton(null);
        }}
        style={{
          rotateY,
          scale,
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
        className="relative py-28 px-4 md:px-12 bg-gradient-to-b from-white to-gray-50 overflow-hidden will-change-transform"
      >
        {/* Floating sparkles */}
        <AnimatePresence>
          {isVisible && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/4 left-1/4 text-amber-300 z-0"
              >
                <Sparkles size={48} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-1/3 right-1/4 text-amber-300 z-0"
              >
                <Sparkles size={48} />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Decorative border gradients */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

        {/* Content wrapper with additional overflow protection */}
        <div className="max-w-7xl mx-auto overflow-hidden">
          {image === "market" ? (
            <motion.div
              className="flex flex-col-reverse md:flex-row items-center justify-center gap-16"
              variants={containerVariants}
            >
              {/* Image with 3D hover */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="relative group overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <Image
                    width={600}
                    height={400}
                    src="/cards/IMG_7706.jpg"
                    alt="Our Market"
                    className="w-full md:w-[600px] h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-10">
                    <motion.div
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white"
                    >
                      <Store size={48} className="mb-4" />
                      <h3 className="text-2xl font-bold">
                        Experience In Person
                      </h3>
                      <p className="text-amber-100">Touch, smell, and select</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                variants={itemVariants}
                className="text-center md:text-left max-w-md"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                  Visit Our{" "}
                  <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                    Flagship Store
                  </span>
                </h2>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  Immerse yourself in our physical space where every product
                  tells a story.
                </p>

                <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link href={"/about-us"} className="w-full sm:w-auto">
                    <motion.button
                      variants={buttonVariants}
                      initial="rest"
                      whileHover="hover"
                      whileTap="tap"
                      onHoverStart={() => setActiveButton(1)}
                      onHoverEnd={() => setActiveButton(null)}
                      className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold flex items-center gap-3 relative overflow-hidden justify-center"
                    >
                      Get Directions
                      <AnimatePresence>
                        {activeButton === 1 && (
                          <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 20, opacity: 0 }}
                            className="absolute right-6 -mr-5"
                          >
                            <ArrowRight />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </Link>

                  <motion.button
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    onClick={() => setShowStoreHours(true)}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-gray-800 border border-gray-200 rounded-xl font-bold flex items-center gap-3 hover:bg-gray-50 transition-colors justify-center"
                  >
                    <span>Store Hours</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              className="flex flex-col md:flex-row items-center justify-center gap-16"
              variants={containerVariants}
            >
              {/* Content */}
              <motion.div
                variants={itemVariants}
                className="text-center md:text-left max-w-md order-2 md:order-1"
              >
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                  Order{" "}
                  <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                    Online Now
                  </span>
                </h2>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                  Get premium products delivered to your door with our seamless
                  digital experience.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => setActiveButton(2)}
                    onHoverEnd={() => setActiveButton(null)}
                    className="w-full sm:w-auto px-14 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-bold flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <span>Web Store</span>
                    <AnimatePresence>
                      {activeButton === 2 && (
                        <motion.span
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 20, opacity: 0 }}
                          className="absolute right-6 -mr-4"
                        >
                          <Zap className="fill-white" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  <motion.button
                    variants={buttonVariants}
                    initial="rest"
                    whileHover="hover"
                    whileTap="tap"
                    onHoverStart={() => setActiveButton(3)}
                    onHoverEnd={() => setActiveButton(null)}
                    className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold flex items-center justify-center gap-3 relative overflow-hidden"
                  >
                    <Smartphone size={20} />
                    <span>Mobile App</span>
                    <AnimatePresence>
                      {activeButton === 3 && (
                        <motion.span
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 20, opacity: 0 }}
                          className="absolute right-6 -mr-4"
                        >
                          <ArrowRight />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>

              {/* Image with 3D hover */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="relative group order-1 md:order-2 overflow-hidden"
              >
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <Image
                    width={600}
                    height={400}
                    src="/order-image.jpg"
                    alt="Online Ordering"
                    className="w-full md:w-[600px] h-130 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-10">
                    <motion.div
                      initial={{ y: 20 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-white"
                    >
                      <ShoppingCart size={48} className="mb-4" />
                      <h3 className="text-2xl font-bold">
                        Digital Convenience
                      </h3>
                      <p className="text-amber-100">Shop from anywhere</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* Store Hours Modal */}
        <AnimatePresence>
          {showStoreHours && <StoreHoursModal />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default UltraOrderSection;
