import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardData = {
  image: string;
  title: string;
  description: string;
};

const cardItems: CardData[] = [
  {
    image: "/cards/cropped image.jpg",
    title: "Fresh Fruits",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: "/cards/image1.jpg",
    title: "Fresh vegetables",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
  },
  {
    image: "/cards/photo_2022-10-05_18-26-10.jpg",
    title: "Fresh vegetables",
    description: "Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    image: "/cards/photo_2021-10-27_10-04-43.jpg",
    title: "Card Four",
    description: "Duis aute irure dolor in reprehenderit in voluptate.",
  },
];

const CardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cardItems.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-3xl shadow-xl overflow-hidden p-10 border-1 border-amber-200"
        >
          <Image
            width={50}
            height={50}
            unoptimized
            src={card.image}
            alt={card.title}
            className="rounded-xl w-full h-40 object-cover "
          />
          <h2 className="text-xl font-bold mt-4">{card.title}</h2>
          <p className="text-gray-700 mt-2 h-14">{card.description}</p>
          <div className="mt-6">
              <Link href={"/products"}>
            <button className=" w-full py-3 px-6 bg-transparent mt-8 hover:cursor-pointer text-orange border border-amber-600  rounded-lg hover:bg-amber-600 hover:text-white transition">
                see more
            </button>
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
