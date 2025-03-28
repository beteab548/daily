"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

const images: string[] = ["/slider-image-2.jpg", "/slider2-.webp", "/slider3.webp"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Clone images for seamless lFooping
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  // Check for mobile viewport
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // Auto-slide and cleanup
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Handle transition end for seamless looping
  useEffect(() => {
    if (!sliderRef.current) return;

    const handleTransitionEnd = () => {
      if (currentIndex === 0) {
        setCurrentIndex(extendedImages.length - 2);
      } else if (currentIndex === extendedImages.length - 1) {
        setCurrentIndex(1);
      }
      setIsAnimating(false);
    };

    const sliderElement = sliderRef.current;
    sliderElement.addEventListener("transitionend", handleTransitionEnd);

    return () => {
      sliderElement.removeEventListener("transitionend", handleTransitionEnd);
    };
  }, [currentIndex]);

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
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= extendedImages.length - 1) {
        requestAnimationFrame(() => {
          setCurrentIndex(1);
        });
      }
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex <= 0) {
        requestAnimationFrame(() => {
          setCurrentIndex(extendedImages.length - 2);
        });
      }
      return newIndex;
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden pb-30">
      {/* Image Slider - Responsive Height */}
      <div className="relative w-full h-48  md:h-full flex items-center justify-center">
        <div
          ref={sliderRef}
          className="flex w-full h-170 transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isAnimating ? "transform 700ms ease-in-out" : "none",
          }}
        >
          {extendedImages.map((img, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative z-2">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "fallback-image.jpg";
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons - Positioned Inside the Image Container */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <button
            onClick={() => handleSlide(prevSlide)}
            disabled={isAnimating}
            aria-label="Previous slide"
            className="bg-amber-300 text-white p-2 md:p-3 rounded-full z-3"
          >
            <ChevronLeft size={isMobile ? 20 : 30} />
          </button>
          <button
            onClick={() => handleSlide(nextSlide)}
            disabled={isAnimating}
            aria-label="Next slide"
            className="bg-amber-300 text-white p-2 md:p-3 rounded-full z-10"
          >
            <ChevronRight size={isMobile ? 20 : 30} />
          </button>
        </div>
      </div>
    </div>
  );
}