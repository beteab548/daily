"use client";
import Image from "next/image";
import { useState, MouseEvent } from "react";
import Typewriter from "../../animation-templates/text";
import ImageSlider from "../../animation-templates/imagesSlider";
import WavyText from "../../animation-templates/wavyText";
import Parallax from "../../animation-templates/imageVerticalSlideShow";

const TiltCard: React.FC = () => {
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    setTilt({ x: x * 20, y: y * -20 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <>
      <div
        className="tilt-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "300px",
          height: "400px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "var(--layer)",
          border: "1px solid var(--border)",
          transform: `perspective(500px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: "transform 0.1s ease-out",
          position: "relative",
          willChange: "transform",
        }}
      >
        <Image
          src="/1.jpg"
          alt="Amsterdam cityscape"
          width={300}
          height={400}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "120px",
            zIndex: 1,
            background:
              "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            zIndex: 2,
            bottom: "20px",
            left: "20px",
            right: "20px",
            color: "var(--white)",
            fontSize: "16px",
            lineHeight: "1.5",
            textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
          }}
        >
          A high-rise in Amsterdam Zuid
        </div>
      </div>
      {/* <Typewriter />
      <ImageSlider />
      <WavyText /> */}
      <Parallax />
    </>
  );
};

export default TiltCard;
