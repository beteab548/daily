"use client";

import { useEffect, useRef, useState } from "react";
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
  { src: "/food-slide-show/snacks.jpeg", label: "Snacks" },
  { src: "/food-slide-show/ethiopian-spices.jpg", label: "Spices & Seasonings" },
];

export default function CategoryImages() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmountRef = useRef(0); // <- persist scroll amount
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer && !hovering) {
        scrollAmountRef.current += 1; // speed
        const maxScroll = scrollContainer.scrollWidth / 2;

        if (scrollAmountRef.current >= maxScroll) {
          scrollAmountRef.current = 0;
        }

        scrollContainer.scrollLeft = scrollAmountRef.current;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [hovering]); // only re-renders when hovering changes

  const fullList = [...imageData, ...imageData]; // Duplicate for loop

  return (
    <div className="flex flex-col bg-gray-50/50 p-4 md:p-10 overflow-hidden mt-20">
      <div className="flex justify-center mt-6 md:mt-10 mb-4 md:mb-6">
        <h1 className="font-serif text-2xl md:text-4xl">Shop By Category</h1>
      </div>
      <div
        ref={scrollRef}
        className="w-full overflow-hidden whitespace-nowrap"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <div className="inline-flex">
          {fullList.map((item, index) => (
            <div
              key={index}
              className="relative w-[100px] sm:w-[120px] md:w-[160px] h-[100px] sm:h-[120px] md:h-[140px] rounded-full overflow-hidden mx-2 sm:mx-3 md:mx-4 group flex-shrink-0"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <p className="text-white text-xs sm:text-sm font-semibold">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
