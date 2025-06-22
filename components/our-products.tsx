"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  meatProducts,
  fruitProducts,
  vegetable,
  ourProduct,
  Beverages,
  others,
} from "@/lib/Products";
import { usePathname, useSearchParams } from "next/navigation";

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

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const products: Record<ProductCategories, Product[]> = {
    "Our Products": ourProduct,
    Vegetable: vegetable,
    Meat: meatProducts,
    Fruits: fruitProducts,
    Beverages: Beverages,
    others: others,
  };

  // Handle tab switching based on URL hash
  useEffect(() => {
    const hash = window.location.hash?.replace("#", "");

    if (hash) {
      let tabToActivate: ProductCategories | null = null;

      if (hash === "fruit") tabToActivate = "Fruits";
      else if (hash === "veggie") tabToActivate = "Vegetable";
      else if (hash === "meat") tabToActivate = "Meat";
      else if (hash === "beverages") tabToActivate = "Beverages";
      else if (hash === "others") tabToActivate = "others";
      else if (hash === "our-products") tabToActivate = "Our Products";

      if (tabToActivate) {
        setActiveTab(tabToActivate);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300);
      }
    }
  }, [pathname, searchParams]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold font-serif bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
        >
          Fresh Market Selection
        </motion.h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Discover our premium quality products, carefully selected for your
          health and satisfaction
        </p>
      </div>

      {/* Tabs */}
      <div className="mb-10 px-1">
        <div className="relative">
          {/* Mobile */}
          <div className="lg:hidden overflow-x-auto pb-2 scrollbar-hide">
            <div className="inline-flex rounded-xl bg-gray-100 p-1 shadow-inner min-w-max">
              {Object.entries(products).map(([key]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as ProductCategories)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeTab === key
                      ? "bg-white shadow-md text-orange-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop */}
          <div className="hidden lg:flex justify-center">
            <div className="inline-flex rounded-xl bg-gray-100 p-1 shadow-inner ">
              {Object.entries(products).map(([key]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as ProductCategories)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap hover:cursor-pointer ${
                    activeTab === key
                      ? "bg-white shadow-md text-orange-600"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Anchor for scroll target */}
      {activeTab === "Fruits" && <div id="fruit" className="sr-only" />}
      {activeTab === "Vegetable" && <div id="veggie" className="sr-only" />}
      {activeTab === "Meat" && <div id="meat" className="sr-only" />}
      {activeTab === "Beverages" && <div id="beverages" className="sr-only" />}
      {activeTab === "others" && <div id="others" className="sr-only" />}
      {activeTab === "Our Products" && (
        <div id="our-products" className="sr-only" />
      )}

      {/* Product Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="wait">
          {products[activeTab].map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={`/${product.image.trimEnd()}`}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-4">
                <h3 className="font-medium text-lg text-gray-800 mb-1">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-3">
                  <button className="text-sm px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-600 hover:bg-emerald-100 transition-colors">
                    Product
                  </button>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
                    #{product.id.toString().padStart(3, "0")}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
