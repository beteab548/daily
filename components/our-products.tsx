"use client";
import { useState } from "react";
import Image from "next/image";
import {
  meatProducts,
  fruitProducts,
  vegetable,
  ourProduct,
  Beverages,
  others,
} from "@/lib/Products";

interface Product {
  id: number;
  image: string;
  name: string;
}

type ProductCategories =
  | "Our Products"
  | "Vegetable"
  | "Meat"
  | "Fruits"
  | "Beverages"
  | "others";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<ProductCategories>("Our Products");
  const [likedItems, setLikedItems] = useState<Set<string>>(new Set());

  // Define products as an object mapping categories to product arrays
  const products: Record<ProductCategories, Product[]> = {
    "Our Products": ourProduct,
    Vegetable: vegetable,
    Meat: meatProducts,
    Fruits: fruitProducts,
    Beverages: Beverages,
    others: others,
  };

  const toggleLike = (name: string) => {
    setLikedItems((prev) => {
      const newLikes = new Set(prev);
      newLikes.has(name) ? newLikes.delete(name) : newLikes.add(name);
      return newLikes;
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 mb-6">
      <div className="flex justify-center font-serif text-4xl m-8">
        <h1>Our Products</h1>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-4 space-x-2 ">
        {Object.keys(products).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 border-b-2 hover:cursor-pointer ${
              activeTab === key
                ? "border-black font-semibold"
                : "border-transparent"
            }`}
            onClick={() => setActiveTab(key as ProductCategories)}
          >
            {key}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:justify-start justify-center">
        {products[activeTab].map((product) => (
          <div
            key={product.id}
            className="relative w-[250px] sm:w-full p-2 text-center border rounded-lg shadow-md group overflow-hidden mx-auto"
            onClick={() => toggleLike(product.name)}
          >
            <div className="relative w-full h-45 p-1">
              <Image
                src={`/${product.image.trimEnd()}`}
                alt={product.name}
                width={250}
                height={250}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <p className="mt-2 font-serif">{product.name}</p>

            {/* Like (Heart) Icon */}
            <span
              className={`absolute top-2 right-2 text-2xl transition-opacity hover:cursor-pointer ${
                likedItems.has(product.name)
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              }`}
            >
              {likedItems.has(product.name) ? "❤️" : "🤍"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
