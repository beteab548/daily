"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function ImageContainers() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Remove if you want animation only once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="m-14 shadow-2xl flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden"
    >
      {/* Image Section */}
      <div
        className={`w-full lg:w-1/2 transform transition-all duration-1000 ease-out ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
        }`}
      >
        <Image
          height={100}
          width={100}
          src="/Daily mart 1.jpg"
          alt="Album"
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>

      {/* Text Section */}
      <div
        className={`bg-lime-200 p-6 flex flex-col items-start mt-4 w-full lg:w-1/2 transform transition-all duration-1000 ease-out delay-200 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <div>
          <h2 className="text-2xl font-semibold mb-2">Our Best Services</h2>
          <p className="text-gray-600 font-serif leading-relaxed">
            At <strong>Daily mart</strong>, we are dedicated to providing the freshest
            produce, high-quality products, and exceptional value—every single
            day. Whether you're planning your weekly grocery run, grabbing a
            quick bite, or searching for trusted local favorites, everything you
            need is right here. From farm-fresh fruits and vegetables to
            essential pantry staples and household goods.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-transparent mt-8 text-orange border border-amber-600 px-6 py-4 rounded-lg hover:bg-amber-600 hover:text-white transition">
            Products
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageContainers;
