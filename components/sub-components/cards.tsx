"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShoppingCart } from "lucide-react";

type CardData = {
  image: string;
  title: string;
  description: string;
  tag?: string;
};

const cardItems: CardData[] = [
  {
    image: "/cards/cropped image.jpg",
    title: "Tropical Fruit Bliss",
    description: "Sun-ripened exotic fruits bursting with flavor",
    tag: "SEASONAL",
  },
  {
    image: "/cards/image1.jpg",
    title: "Organic Veggie Harvest",
    description: "Farm-fresh vegetables packed with nutrients",
    tag: "LOCAL",
  },
  {
    image: "/cards/photo_2022-10-05_18-26-10.jpg",
    title: "Leafy Green Symphony",
    description: "Crisp, vibrant greens for your healthy lifestyle",
    tag: "NEW",
  },
  {
    image: "/cards/photo_2021-10-27_10-04-43.jpg",
    title: "Gourmet Produce Selection",
    description: "Hand-selected premium ingredients for chefs",
    tag: "PREMIUM",
  },
];

const CardGrid = () => {
  useEffect(() => {
    cardItems.forEach((item) => {
      const img = new window.Image();
      img.src = item.image;
    });
  }, []);

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50/20 via-white to-white overflow-hidden">
      {/* Sparkles animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-300"
            initial={{
              x:
                typeof window !== "undefined"
                  ? Math.random() * window.innerWidth
                  : 0,
              y:
                typeof window !== "undefined"
                  ? Math.random() * window.innerHeight
                  : 0,
              scale: Math.random() * 0.5 + 0.5,
              opacity: 0,
            }}
            animate={{
              y: [0, -50],
              opacity: [0, 0.4, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            <Sparkles size={24} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-20px 0px -50px 0px" }}
          className="text-center mb-16 min-h-[5rem] px-4"
        >
          <h2
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-4 leading-tight 
                 pb-1 [text-shadow:_0_1px_0_rgb(0_0_0_/_10%)]"
          >
            Fresh Delights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover nature's bounty in every bite
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardItems.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.3)] transition-all duration-500 border border-amber-100/50 will-change-transform"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  fill
                  src={card.image}
                  alt={card.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating emoji */}
              <motion.div
                className="absolute top-4 right-4 text-3xl"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 20, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {index % 2 === 0 ? "🌱" : "✨"}
              </motion.div>

              {/* Tag */}
              {card.tag && (
                <div
                  className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${
                    card.tag === "NEW"
                      ? "bg-emerald-500 text-white"
                      : card.tag === "PREMIUM"
                      ? "bg-amber-500 text-white"
                      : "bg-white text-amber-600 border border-amber-200"
                  }`}
                >
                  {card.tag}
                </div>
              )}

              <div className="p-6 bg-gradient-to-b from-white to-amber-50/30">
                <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2"></span>
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-6 min-h-[3.5rem]">
                  {card.description}
                </p>

                <Link href="/products" passHref>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgb(245, 158, 11)",
                      color: "white",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 bg-white text-amber-600 border border-amber-300 rounded-lg hover:border-amber-500 transition-all duration-300 font-medium flex items-center justify-center gap-2 group-hover:shadow-md"
                  >
                    <span>check Now</span>
                    <motion.span
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </motion.span>
                  </motion.button>
                </Link>

                {/* Floating cart icon */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    y: [0, -5, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <ShoppingCart className="text-amber-500" size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
