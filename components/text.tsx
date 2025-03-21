"use client";
import { useState, useEffect } from "react";

const Typewriter: React.FC = () => {
  const text = "Order From Our App ";
  const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isTypingFinished, setIsTypingFinished] = useState<boolean>(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      setIsTypingFinished(true); // Set to true once typing is done
    }
  }, [index]);

  return (
    <h2 className="relative font-mono">
      {displayedText}
      {!isTypingFinished && (
        <span className="inline-block w-[2px] h-[1em] bg-black ml-2 animate-blink " />
      )}
    </h2>
  );
};

export default Typewriter;
