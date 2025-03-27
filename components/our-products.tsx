"use client";
import { useState } from "react";

interface Product {
  id: number;
  image: string;
  name: string;
}

type ProductCategories = "special" | "new" | "bestsellers";

const products: Record<ProductCategories, Product[]> = {
  special: [
    {
      id: 1,
      image: "special-products/blueberry_plantslive.jpg",
      name: "Blueberry Plantslive",
    },
    {
      id: 2,
      image: "special-products/fresh-chinese-cabbage.webp",
      name: "Fresh Chiness Cabbage",
    },
    {
      id: 3,
      image: "special-products/Graviola_Sliced-Fruit.jpg",
      name: "Graviola Sliced Fruit",
    },
    { id: 4, image: "special-products/pear.jpeg", name: "Pear" },
  ],
  new: [
    {
      id: 5,
      image: "new-products/Black watermelon.jpg",
      name: "Black water Meleon",
    },
    { id: 6, image: "new-products/Red Cabbage.jpg", name: "Red Cabbage" },
    { id: 7, image: "new-products/fennel.png", name: "Fennel" },
    { id: 8, image: "new-products/black-grapes.jpg", name: "black-grapes" },
  ],
  bestsellers: [
    { id: 9, image: "best-sellers-products/potato.jpg", name: "potato" },
    { id: 10, image: "best-sellers-products/Red Onion.jpg", name: "Red Onion" },
    { id: 11, image: "best-sellers-products/tomato.jpg", name: "tomato" },
    { id: 12, image: "best-sellers-products/banana.jpg", name: "Banana" },
  ],
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<ProductCategories>("special");
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());

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
    <div>
      <div className="w-full max-w-5xl mx-auto p-4 mb-6">
        <div className="flex justify-center font-serif text-4xl m-8">
          <h1>Our products</h1>
        </div>
        <div className="flex justify-center mb-4 space-x-2">
          {(Object.keys(products) as ProductCategories[]).map((key) => (
            <button
              key={key}
              className={`px-4 py-2 border-b-2 hover:cursor-pointer ${
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:justify-start justify-center">
          {products[activeTab].map((product) => (
            <div
              key={product.id}
              className="relative w-[250px] sm:w-full p-2 text-center border rounded-lg shadow-md group overflow-hidden mx-auto"
            >
              <div className="relative w-full h-45 p-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 font-semibold">{product.name}</p>
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute hover:cursor-pointer top-2 right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
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
