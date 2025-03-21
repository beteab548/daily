"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const imageData = [
  { src: "/image1.jpg", label: "Fresh Fruits" },
  { src: "/slider1.webp", label: "Organic Vegetables" },
  { src: "/slider2.webp", label: "Dairy Products" },
  { src: "/slider3.webp", label: "Baked Goods" },
  { src: "/image1.jpg", label: "Healthy Snacks" },
  { src: "/slider1.webp", label: "Fresh Meat" },
  { src: "/slider2.webp", label: "Seafood" },
  { src: "/slider2.webp", label: "Seafood" },
  { src: "/slider3.webp", label: "Beverages" },
];

export default function CategoryImages() {
  const [imageList, setImageList] = useState(imageData);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleSlide();
    }, 3000);
  };

  const handleSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.7s ease-in-out";
      sliderRef.current.style.transform = "translateX(-140px)"; // Move images left
    }

    setTimeout(() => {
      setImageList((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first]; // Move first image to the back
      });

      // Instantly reset position for smooth looping
      if (sliderRef.current) {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = "translateX(0)";
      }

      setIsAnimating(false);
    }, 700); // Matches transition duration
  };

  return (
    <div className="flex flex-col m-18 bg-gray-50">
      <div className="flex justify-center mt-10 mb-6">
        <h1 className="font-serif text-4xl">Shop By Category</h1>
      </div>
      <div className="relative w-full h-80 overflow-hidden bg-gray-50 flex items-center justify-center">
        <div
          ref={sliderRef}
          className="flex items-center transition-transform duration-700 ease-in-out"
          onMouseEnter={() =>
            timerRef.current && clearInterval(timerRef.current)
          }
          onMouseLeave={() => startAutoSlide()}
        >
          {imageList.map((item, index) => (
            <div
              key={index}
              className="relative w-35 h-35 rounded-full overflow-hidden flex-shrink-0 mx-4 transition-all duration-700 ease-in-out group"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover"
              />

              {/* Overlay & Text */}
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <p className="text-white text-sm font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
