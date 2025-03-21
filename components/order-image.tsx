"use client";
import { useState } from "react";

interface ImageContainerProps {
  src: string;
  alt?: string;
  className?: string;
}

const OrderImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  className,
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20; // Rotate on X-axis
    const y = ((e.clientY - top) / height - 0.5) * -20; // Rotate on Y-axis (inverse)

    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      className={`relative w-74 h-84 overflow-hidden rounded-xl shadow-lg transition-transform duration-150 ${className}`}
      style={{
        transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default OrderImageContainer;
