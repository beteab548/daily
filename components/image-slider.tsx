"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Menu } from "lucide-react";

const images: string[] = ["/slider1.jpg", "/slider2.webp", "/slider3.webp"];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState<number>(1); // Start at 1 to account for cloned slides
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false); // State for sidebar visibility
  const sliderRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Clone first and last images for seamless looping
  const extendedImages = [images[images.length - 1], ...images, images[0]];

  // Start auto-slide on mount and clean up on unmount
  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Reset currentIndex to 1 on mount
  useEffect(() => {
    setCurrentIndex(1); // Reset to the first real slide on mount
  }, []);

  // Auto-slide functionality
  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      handleSlide(nextSlide);
    }, 5000);
  };

  // Handle slide transitions
  const handleSlide = (slideFunc: () => void) => {
    if (isAnimating) return;
    setIsAnimating(true);
    if (timerRef.current) clearInterval(timerRef.current);

    slideFunc();

    timeoutRef.current = window.setTimeout(() => {
      setIsAnimating(false);
      startAutoSlide();
    }, 800); // Matches transition duration
  };

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      if (newIndex >= extendedImages.length - 1) {
        // Schedule the reset to happen after the transition
        requestAnimationFrame(() => {
          setCurrentIndex(1); // Reset to the first real slide
        });
      }
      return newIndex;
    });
  };

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex <= 0) {
        // Schedule the reset to happen after the transition
        requestAnimationFrame(() => {
          setCurrentIndex(extendedImages.length - 2); // Reset to the last real slide
        });
      }
      return newIndex;
    });
  };

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Top Navigation Bar */}

      {/* Sidebar (Visible on small screens when toggled) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-amber-500">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-amber-500">
                Products
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-700 hover:text-amber-500">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Image Slider */}
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
                e.currentTarget.src = "fallback-image.jpg"; // Fallback for broken images
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
        className={`absolute left-5 top-1/2 transform -translate-y-1/2 bg-amber-300 text-white p-3 rounded-full ${
          isAnimating ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-400"
        }`}
      >
        <ChevronLeft size={30} />
      </button>

      {/* Next Button */}
      <button
        onClick={() => handleSlide(nextSlide)}
        disabled={isAnimating}
        aria-label="Next slide"
        className={`absolute right-5 top-1/2 transform -translate-y-1/2 bg-amber-300 text-white p-3 rounded-full ${
          isAnimating ? "opacity-50 cursor-not-allowed" : "hover:bg-amber-400"
        }`}
      >
        <ChevronRight size={30} />
      </button>
    </div>
  );
}
