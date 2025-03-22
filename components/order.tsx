"use client";
import { useEffect, useState, useRef } from "react";
import IconButton from "./sub-components/links";
import OrderImageContainer from "./sub-components/order-image";
import Typewriter from "./sub-components/type-writer";

function OrderImages({ image }: { image: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-center justify-center text-center gap-8 mb-28 px-4 md:px-12"
    >
      {image == "market" ? (
        <>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <OrderImageContainer
              src={
                image == "market" ? "daily-mart-image.jpg" : "order-image.jpg"
              }
              alt="hover me"
              className="w-full md:w-auto"
            />
            <p className="font-serif text-2xl md:text-4xl mt-4 md:mt-0">
              Visit Our Market
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex flex-col items-center font-serif text-2xl md:text-4xl gap-6">
              {isVisible && <Typewriter />}
              <div className="flex flex-row space-x-5">
                <IconButton type="market" />
                <IconButton type="appstore" />
              </div>
            </div>
            <OrderImageContainer
              src={
                image == "market" ? "daily-mart-image.jpg" : "order-image.jpg"
              }
              alt="hover me"
              className="w-full md:w-auto"
            />
          </div>
        </>
      )}
    </div>
  );
}
export default OrderImages;
