"use client";
import { useState } from "react";

interface Product {
  id: number;
  image: string;
  name: string;
}

type ProductCategories =
  | "Our_Products"
  | "vegetable"
  | "Meat"
  | "Fruits"
  | "Beverages";

const products: Record<ProductCategories, Product[]> = {
  Our_Products: [
    {
      id: 1,
      image: "special-products/aqua 1L.jpg",
      name: "Aquadis water",
    },
    {
      id: 2,
      image: "special-products/dukemiye-01.jpg",
      name: "Dukemiye Food Oil",
    },
    {
      id: 3,
      image: "special-products/royal.jpg ",
      name: "Royal Tonic Drink",
    },
    { id: 4, image: "special-products/natura milk.jpg", name: "Natura Milk" },
    { id: 5, image: "special-products/astu enjera.png", name: "Astu Enjera" },
    { id: 6, image: "special-products/enjera.png", name: " white teff Enjera" },
  ],
  vegetable: [
    { id: 1, image: "vegetables-image/potato.jpg", name: "Potato" },
    { id: 2, image: "vegetables-image/Red Cabbage.jpg", name: "Red Cabbage" },
    { id: 3, image: "vegetables-image/fennel.png", name: "Fennel" },
    { id: 4, image: "vegetables-image/Red Onion.jpg", name: "Red Onion" },
    { id: 5, image: "vegetables-image/tomato.jpg", name: "Red Tomato" },
  ],
  Fruits: [
    { id: 1, image: "fruits/Black Watermelon.jpg", name: "Black Watermelon" },
    {
      id: 2,
      image: "fruits/Graviola_Sliced-Fruit.jpg",
      name: "Graviola Sliced Fruit",
    },
    { id: 3, image: "fruits/Green Apple.jpg", name: "Green Apple" },
    { id: 4, image: "fruits/Zebra Watermelon.jpg", name: "Zebra Watermelon" },
    { id: 5, image: "fruits/Banana.jpg", name: "Banana" },
    { id: 6, image: "fruits/Avocado.jpg", name: "Avocado" },
    { id: 7, image: "fruits/peach+.png", name: "Peach" },
    { id: 8, image: "fruits/white grape.jpg", name: "White Grape" },
    { id: 9, image: "fruits/Red Grape.jpg", name: "Red Grape" },
    { id: 10, image: "fruits/Red apple.png", name: "Red Apple" },
    { id: 11, image: "fruits/pinapple.jpg", name: "Pineapple" },
    { id: 12, image: "fruits/imported-plums.jpg", name: "Imported Plum" },
    { id: 13, image: "fruits/black-grapes.jpg", name: "Black Grape" },
    { id: 14, image: "fruits/Kiwi.jpg", name: "Kiwi" },
    { id: 15, image: "fruits/Mango.jpeg", name: "Mango" },
    { id: 16, image: "fruits/grapes.jpg", name: "Red Grape" },
  ],
  Meat: [
    { id: 1, image: "meats-images/beef chops.png", name: "Beef Chops" },
    { id: 2, image: "meats-images/BEEF SOSAGE.png", name: "Beef Sausage" },
    { id: 3, image: "meats-images/lamb back leg.png", name: "Lamb Back Leg" },
    { id: 4, image: "meats-images/lamb kidney.png", name: "Lamb Kidney" },
    { id: 5, image: "meats-images/GOAT CHOPS.png", name: "Goat Chops" },
    { id: 6, image: "meats-images/beef tripe.png", name: "Beef Tripe" },
    { id: 7, image: "meats-images/veal chops.png", name: "Veal Chops" },
    { id: 8, image: "meats-images/lamb-tripe.png", name: "Lamb Tripe" },
    { id: 9, image: "meats-images/raw-liver.png", name: "Raw Liver" },
    { id: 10, image: "meats-images/beef-tongue.png", name: "Beef Tongue" },
    { id: 11, image: "meats-images/beef heart.png", name: "Beef Heart" },
    { id: 12, image: "meats-images/beef kidney.png", name: "Beef Kidney" },
  ],
  Beverages: [
    {
      id: 1,
      image: "special-products/blueberry_plantslive.jpg",
      name: "Blueberry Plantslive",
    },
  ],
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<ProductCategories>("Our_Products");
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
          <h1>Our Products</h1>
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
              onClick={() => toggleLike(product.id)} // Clicking anywhere toggles like
            >
              <div className="relative w-full h-45 p-1">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="mt-2 font-serif">{product.name}</p>

              {/* Heart icon, remains visible if liked */}
              <span
                className={`absolute top-2 right-2 text-2xl transition-opacity ${
                  likedItems.has(product.id)
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {likedItems.has(product.id) ? "❤️" : "🤍"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
