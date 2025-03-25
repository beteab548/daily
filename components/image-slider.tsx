"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images: string[] = ["/slider1.jpg", "/slider2.webp", "/slider3.webp"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex(1);
  }, []);

  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      handleSlide(nextSlide);
    }, 5000);
  };

  const handleSlide = (slideFunc: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (timerRef.current) clearInterval(timerRef.current);

    slideFunc();

    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
      startAutoSlide();
    }, 800);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= extendedImages.length - 1) {
        setTimeout(() => {
          setCurrentIndex(1);
        }, 800);
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex <= 0) {
        setTimeout(() => {
          setCurrentIndex(extendedImages.length - 2);
        }, 800);
      }
      return newIndex;
    });
  };

  useEffect(() => {
    if (!sliderRef.current) return;

    const handleTransitionEnd = () => {
      if (currentIndex === extendedImages.length - 1) {
        setCurrentIndex(1);
      } else if (currentIndex === 0) {
        setCurrentIndex(extendedImages.length - 2);
      }
    };

    const sliderElement = sliderRef.current;
    sliderElement.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderElement.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[50vh] md:h-[75vh] lg:h-screen overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          ref={sliderRef}
          className="flex w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {extendedImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover flex-shrink-0"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.src = "fallback-image.jpg";
              }}
            />
          ))}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={() => handleSlide(prevSlide)}
        disabled={isAnimating}
        aria-label="Previous slide"
        className={`absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 bg-amber-300 text-white p-2 sm:p-3 rounded-full ${
          isAnimating ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-400"
        }`}
      >
        <ChevronLeft size={24} className="sm:size-30" />
      </button>

      {/* Next Button */}
      <button
        onClick={() => handleSlide(nextSlide)}
        disabled={isAnimating}
        aria-label="Next slide"
        className={`absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 bg-amber-300 text-white p-2 sm:p-3 rounded-full ${
          isAnimating ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-400"
        }`}
      >
        <ChevronRight size={24} className="sm:size-30" />
      </button>
    </div>
  );
}
