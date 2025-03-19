"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images: string[] = ["slider3.webp", "slider2.webp", "slider1.webp"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // Start at 1 to account for cloned slides
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const extendedImages = [images[images.length - 1], ...images, images[0]]; // Clone first and last images

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      handleSlide(() => nextSlide());
    }, 5000);
  };

  const handleSlide = (slideFunc: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (timerRef.current) clearInterval(timerRef.current);

    slideFunc();

    setTimeout(() => {
      setIsAnimating(false);
      startAutoSlide();
    }, 800); // Matches transition duration
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    const handleTransitionEnd = () => {
      if (currentIndex === extendedImages.length - 1) {
        setIsAnimating(false);
        setCurrentIndex(1); // Jump to first real image (skip cloned last image)
        sliderRef.current!.style.transition = "none"; // Remove transition for instant jump
        setTimeout(() => {
          sliderRef.current!.style.transition = "transform 0.8s ease-in-out"; // Restore transition
        }, 50);
      } else if (currentIndex === 0) {
        setIsAnimating(false);
        setCurrentIndex(extendedImages.length - 2); // Jump to last real image (skip cloned first image)
        sliderRef.current!.style.transition = "none"; // Remove transition for instant jump
        setTimeout(() => {
          sliderRef.current!.style.transition = "transform 0.8s ease-in-out"; // Restore transition
        }, 50);
      }
    };

    sliderRef.current.addEventListener("transitionend", handleTransitionEnd);
    return () => {
      sliderRef.current!.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="relative w-full h-130 flex items-center justify-center">
        <div
          ref={sliderRef}
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Slide Image"
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => handleSlide(prevSlide)}
        disabled={isAnimating}
        className={`absolute left-5 top-1/2 transform -translate-y-1/2 bg-amber-300 text-white p-3 rounded-full ${
          isAnimating ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={() => handleSlide(nextSlide)}
        disabled={isAnimating}
        className={`absolute right-5 top-1/2 transform -translate-y-1/2 bg-amber-300 text-white p-3 rounded-full ${
          isAnimating ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
