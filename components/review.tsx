"use client";
import { useState, useEffect } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// ReviewCard Component
const ReviewCard = ({
  comment,
  lastName,
  rating,
}: {
  comment: string;
  lastName: string;
  rating: number;
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i - 0.5 === rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl w-full sm:w-80 m-4 flex flex-col items-center ">
      <div className="flex">{renderStars(rating)}</div>
      <p className="mt-2 text-gray-600 text-center ">"{comment}"</p>
      <p className="mt-3 text-lg font-semibold">- {lastName}</p>
    </div>
  );
};

const Home = () => {
  const reviews = [
    {
      icon: "/path/to/icon1.jpg",
      comment: "simple and easy to use app!",
      lastName: "Daniel",
      rating: 5,
    },
    {
      icon: "/path/to/icon2.jpg",
      comment: "Loved shopping at the store! Amazing selection of products",
      lastName: "Melat",
      rating: 4.5,
    },
    {
      icon: "/path/to/icon3.jpg",
      comment:
        "The app is very user-friendly and easy to navigate! Highly recommend!",
      lastName: "Yonhannes",
      rating: 3.5,
    },
    {
      icon: "/path/to/icon4.jpg",
      comment: "The in-store experience was fantastic, great customer service!",
      lastName: "Endalkachew",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-50 py-12 px-4">
      <h1 className="font-serif text-4xl mb-10 text-center">
        Our customer say
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ReviewCard
          comment={reviews[currentIndex].comment}
          lastName={reviews[currentIndex].lastName}
          rating={reviews[currentIndex].rating}
        />
        <ReviewCard
          comment={reviews[(currentIndex + 1) % reviews.length].comment}
          lastName={reviews[(currentIndex + 1) % reviews.length].lastName}
          rating={reviews[(currentIndex + 1) % reviews.length].rating}
        />
      </div>
    </div>
  );
};

export default Home;
