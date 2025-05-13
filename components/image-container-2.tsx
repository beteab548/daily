"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import {
  ShoppingCart,
  Sparkles,
  ArrowRight,
  Leaf,
  CheckCircle,
  Truck,
} from "lucide-react";
import React from "react";
import Link from "next/link";

interface Feature {
  icon: React.ReactElement;
  title: string;
  description: string;
  accentColor: string;
}

interface CosmicShowcaseProps {
  layoutDirection?: "image-left" | "image-right";
  primaryColor?: string;
  secondaryColor?: string;
  imageSrc?: string;
}

const defaultImageSrc = "/cards/IMG_7703.jpg";
const defaultPrimaryColor = "indigo";
const defaultSecondaryColor = "purple";

function CosmicShowcase2({
  layoutDirection = "image-left",
  primaryColor = defaultPrimaryColor,
  secondaryColor = defaultSecondaryColor,
  imageSrc = defaultImageSrc,
}: CosmicShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const features: Feature[] = [
    {
      icon: <Leaf className={`text-${primaryColor}-500`} size={32} />,
      title: "Naturally Fresh",
      description: "Sourced directly from local farms for ultimate freshness.",
      accentColor: `bg-${primaryColor}-100 text-${primaryColor}-500`,
    },
    {
      icon: <Sparkles className="text-orange-500" size={32} />,
      title: "Seasonal Picks",
      description: "Taste the best of each season with hand-picked produce.",
      accentColor: "bg-orange-100 text-orange-500",
    },
    {
      icon: <CheckCircle className={`text-${secondaryColor}-400`} size={32} />,
      title: "Sustainable Choices",
      description: "Committed to eco-friendly practices and products.",
      accentColor: `bg-${secondaryColor}-100 text-${secondaryColor}-400`,
    },
    {
      icon: <Truck className={`text-${primaryColor}-600`} size={32} />,
      title: "Fast Delivery",
      description: "Get your groceries delivered quickly and efficiently.",
      accentColor: `bg-${primaryColor}-100 text-${primaryColor}-600`,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.2 },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: layoutDirection === "image-left" ? -80 : 80,
      rotate: layoutDirection === "image-left" ? -5 : 5,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.4 },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: `0px 8px 15px rgba(0, 0, 0, 0.1)`,
    },
    tap: { scale: 0.95 },
    initial: { scale: 1 },
  };

  const textColor = `text-${primaryColor}-900`;
  const secondaryTextColor = `text-${primaryColor}-700`;
  const buttonGradientFrom = `from-${primaryColor}-500`;
  const buttonGradientTo = `to-${secondaryColor}-500`;
  const buttonGradientHoverFrom = `from-${primaryColor}-600`;
  const buttonGradientHoverTo = `to-${secondaryColor}-600`;
  const abstractBgFrom = `from-${secondaryColor}-100`;
  const abstractBgTo = `to-${primaryColor}-100`;

  return (
    <section
      ref={containerRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6 md:px-12 relative">
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${abstractBgFrom} ${abstractBgTo} opacity-50 rounded-xl blur-xl`}
        ></div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-xl bg-white/80 backdrop-blur-md shadow-lg p-8 md:p-16 ${
            layoutDirection === "image-right"
              ? "lg:grid-cols-2 lg:grid-flow-col-dense"
              : ""
          }`}
        >
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className={`relative rounded-lg overflow-hidden aspect-w-16 aspect-h-9 ${
              layoutDirection === "image-right"
                ? "order-2 lg:order-1"
                : "order-1 lg:order-2"
            }`}
          >
            <Image
              src={imageSrc}
              alt="Premium Grocery Selection"
              width={3000}
              height={2000}
              style={{ objectPosition: "center top" }}
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <ShoppingCart className="text-white size-10" />
            </div>
          </motion.div>

          {/* Text and Features Section */}
          <div
            className={`space-y-8 ${
              layoutDirection === "image-right"
                ? "order-1 lg:order-2"
                : "order-2 lg:order-1"
            }`}
          >
            <motion.h2
              variants={titleVariants}
               className=" text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Discover a New Era of Grocery Shopping
            </motion.h2>
            <motion.p
              variants={textVariants}
              className={`text-lg ${secondaryTextColor} leading-relaxed`}
            >
              Embark on a journey of culinary excellence with our carefully
              curated selection. We bring you the finest ingredients and
              artisanal products from around the country, ensuring an unparalleled
              shopping experience.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  variants={featureVariants}
                  key={index}
                  className={`p-6 rounded-md shadow-sm border border-gray-200 ${feature.accentColor}`}
                >
                  <div className="flex items-center space-x-4">
                    {feature.icon}
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
           <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`relative overflow-hidden px-8 py-4  text-white rounded-md font-semibold inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-500`}
              >
              Explore Our Premium Collection
            
              <div
                className={`absolute inset-0 bg-gradient-to-r ${buttonGradientHoverFrom} ${buttonGradientHoverTo} opacity-0 hover:opacity-20 transition-opacity duration-300`}
                ></div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CosmicShowcase2;
