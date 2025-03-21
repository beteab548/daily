"use client";
// pages/index.tsx
// pages/index.tsx
import { useState, useEffect } from "react";

// ReviewCard Component
const ReviewCard = ({
  icon,
  comment,
  lastName,
}: {
  icon: string;
  comment: string;
  lastName: string;
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-92 m-8">
      <div className="mt-2 text-gray-600">{comment}</div>
      <div className="flex items-center space-x-3">
        <p className="text-lg font-semibold">{lastName}</p>
      </div>
    </div>
  );
};

const Home = () => {
  const reviews = [
    {
      icon: "/path/to/icon1.jpg",
      comment: "This is a great product!",
      lastName: "Doe",
    },
    {
      icon: "/path/to/icon2.jpg",
      comment: "Loved it, would buy again!",
      lastName: "Smith",
    },
    {
      icon: "/path/to/icon3.jpg",
      comment: "Not bad, could be improved.",
      lastName: "Brown",
    },
    {
      icon: "/path/to/icon4.jpg",
      comment: "Excellent quality!",
      lastName: "Johnson",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % reviews.length); // Increment by 2 to show two cards
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <div className="flex justify-center items-center  flex-col bg-gray-50 h-80">
      <h1 className=" font-serif text-4xl mb-10">Customer Reviews</h1>

      <div className="flex space-x-6">
        <div
          key={reviews[currentIndex].lastName}
          className="transition-opacity duration-1000 ease-in-out opacity-100"
        >
          <ReviewCard
            icon={reviews[currentIndex].icon}
            comment={reviews[currentIndex].comment}
            lastName={reviews[currentIndex].lastName}
          />
        </div>
        <div
          key={reviews[(currentIndex + 1) % reviews.length].lastName}
          className="transition-opacity duration-1000 ease-in-out opacity-100"
        >
          <ReviewCard
            icon={reviews[(currentIndex + 1) % reviews.length].icon}
            comment={reviews[(currentIndex + 1) % reviews.length].comment}
            lastName={reviews[(currentIndex + 1) % reviews.length].lastName}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
