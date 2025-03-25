"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageData {
  src: string;
  label: string;
}

const imageData: ImageData[] = [
  { src: "/food-slide-show/fresh-fruits.jpg", label: "Fresh Fruits" },
  { src: "/food-slide-show/organic-vegetables.jpg", label: "Organic Vegetables" },
  { src: "/food-slide-show/dairy-products.jpg", label: "Dairy Products" },
  { src: "/food-slide-show/baked-goods.jpg", label: "Baked Goods" },
  { src: "/food-slide-show/fresh-meat.jpg", label: "Fresh Meat" },
  { src: "/food-slide-show/sea-food.jpg", label: "Seafood" },
  { src: "/food-slide-show/beaverage.jpg", label: "Beverages" },
  { src: "/food-slide-show/snacks.jpg", label: "Snacks" },
  { src: "/food-slide-show/spices.jpg", label: "Spices & Seasonings" },
];

export default function CategoryImages() {
  const [imageList, setImageList] = useState<ImageData[]>(imageData);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
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
      sliderRef.current.style.transform = "translateX(-140px)";
    }

    setTimeout(() => {
      setImageList((prevImages) => {
        const [first, ...rest] = prevImages;
        return [...rest, first];
      });

      if (sliderRef.current) {
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = "translateX(0)";
      }

      void sliderRef.current?.offsetWidth;
      setTimeout(() => setIsAnimating(false), 50);
    }, 700);
  };

  return (
    <div className="flex flex-col bg-gray-50/50 p-4 md:p-10">
      <div className="flex justify-center mt-6 md:mt-10 mb-4 md:mb-6">
        <h1 className="font-serif text-2xl md:text-4xl">Shop By Category</h1>
      </div>
      <div className="relative w-full h-auto md:h-80 overflow-hidden flex items-center justify-center">
        <div
          ref={sliderRef}
          className="flex flex-wrap md:flex-nowrap items-center transition-transform duration-700 ease-in-out"
          onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
          onMouseLeave={() => startAutoSlide()}
        >
          {imageList.map((item, index) => (
            <div
              key={index}
              className="relative w-[100px] sm:w-[120px] md:w-[140px] h-[100px] sm:h-[120px] md:h-[140px] rounded-full overflow-hidden flex-shrink-0 mx-2 sm:mx-3 md:mx-4 transition-all duration-700 ease-in-out group"
            >
              <Image src={item.src} alt={item.label} fill className="object-cover" />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
