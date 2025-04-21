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
  const scrollAmountRef = useRef(0);
  const [hovering, setHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const scrollStartX = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId: number;

    const scroll = () => {
      if (scrollContainer && !hovering && !isDragging) {
        scrollAmountRef.current += 1;
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
  }, [hovering, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.clientX;
    scrollStartX.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!scrollRef.current || !isDragging) return;
    const dx = e.clientX - dragStartX.current;
    scrollRef.current.scrollLeft = scrollStartX.current - dx;
    scrollAmountRef.current = scrollRef.current.scrollLeft;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => {
    if (isDragging) setIsDragging(false);
    setHovering(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const fullList = [...imageData, ...imageData]; // For seamless scroll

  return (
    <div className="flex flex-col bg-gray-50/50 p-4 md:p-10 overflow-hidden mt-20">
      <div className="flex justify-center mt-6 md:mt-10 mb-4 md:mb-6">
        <h1 className="font-serif text-2xl md:text-4xl text-gray-600 mb-8">
          Shop By Category
        </h1>
      </div>
      <div
        ref={scrollRef}
        className="w-full overflow-hidden whitespace-nowrap cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
      >
        <div className="inline-flex select-none">
          {fullList.map((item, index) => (
            <div
              key={index}
              className="relative w-[100px] sm:w-[120px] md:w-[151px] h-[100px] sm:h-[120px] md:h-[140px] rounded-full overflow-hidden mx-2 sm:mx-3 md:mx-4 group flex-shrink-0"
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
