"use client";
import { useTheme } from "next-themes";
import { useState } from "react";

interface Product {
  id: number;
  image: string;
  hoverImage: string;
  name: string;
}

type ProductCategories = "special" | "new" | "bestsellers";

const products: Record<ProductCategories, Product[]> = {
  special: [
    {
      id: 1,
      image: "/3.jpg",
      hoverImage: "/2.jpg",
      name: "Special Item 1",
    },
    {
      id: 2,
      image: "/2.jpg",
      hoverImage: "/4.jpg",
      name: "Special Item 2",
    },
    {
      id: 3,
      image: "/4.jpg",
      hoverImage: "/special3-hover.jpg",
      name: "Special Item 3",
    },
    {
      id: 4,
      image: "/3.jpg",
      hoverImage: "/special4-hover.jpg",
      name: "Special Item 4",
    },
    {
      id: 5,
      image: "/2.jpg",
      hoverImage: "/special3-hover.jpg",
      name: "Special Item 3",
    },
    {
      id: 6,
      image: "/4.jpg",
      hoverImage: "/special4-hover.jpg",
      name: "Special Item 4",
    },
    {
      id: 7,
      image: "/3.jpg",
      hoverImage: "/special3-hover.jpg",
      name: "Special Item 3",
    },
    {
      id: 8,
      image: "/2.jpg",
      hoverImage: "/special4-hover.jpg",
      name: "Special Item 4",
    },
  ],
  new: [
    {
      id: 5,
      image: "/2.jpg",
      hoverImage: "/new1-hover.jpg",
      name: "New Product 1",
    },
    {
      id: 6,
      image: "/3.jpg",
      hoverImage: "/new2-hover.jpg",
      name: "New Product 2",
    },
    {
      id: 7,
      image: "/4.jpg",
      hoverImage: "/new3-hover.jpg",
      name: "New Product 3",
    },
    {
      id: 8,
      image: "/2.jpg",
      hoverImage: "/new4-hover.jpg",
      name: "New Product 4",
    },
  ],
  bestsellers: [
    {
      id: 9,
      image: "/3.jpg",
      hoverImage: "/best1-hover.jpg",
      name: "Bestseller 1",
    },
    {
      id: 10,
      image: "/2.jpg",
      hoverImage: "/best2-hover.jpg",
      name: "Bestseller 2",
    },
    {
      id: 11,
      image: "/4.jpg",
      hoverImage: "/best3-hover.jpg",
      name: "Bestseller 3",
    },
    {
      id: 12,
      image: "/2.jpg",
      hoverImage: "/best4-hover.jpg",
      name: "Bestseller 4",
    },
  ],
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<ProductCategories>("special");
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const { theme } = useTheme();
  const toggleLike = (id: number) => {
    setLikedItems((prev) => {
      const newLikes = new Set(prev);
      if (newLikes.has(id)) {
        newLikes.delete(id);
      } else {
        newLikes.add(id);
      }
      return newLikes;
    });
  };

  return (
    <div suppressHydrationWarning className={`${theme === "dark" ? "bg-gray-700" : ""}`}>
      <div className="w-full max-w-5xl mx-auto p-4 mb-6 ">
        <div className="flex justify-center font-serif text-4xl m-8">
          <h1>Our products</h1>
        </div>
        <div className="flex justify-center mb-4 space-x-2">
          {(Object.keys(products) as ProductCategories[]).map((key) => (
            <button
              key={key}
              className={`px-4 py-2 border-b-2 ${
                activeTab === key
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
              onClick={() => setActiveTab(key)}
            >
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/([A-Z])/g, " $1")}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products[activeTab].map((product) => (
            <div
              key={product.id}
              className="relative p-2 text-center border rounded-lg shadow-md group overflow-hidden"
            >
              <div className="relative w-full h-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0"
                />
                <img
                  src={product.hoverImage}
                  alt={product.name}
                  className="w-full h-50 object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100"
                />
              </div>
              <p className="mt-2 font-semibold">{product.name}</p>
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {likedItems.has(product.id) ? "❤️" : "🤍"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
