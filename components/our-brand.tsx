'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    src: '/special-products/dukemiye-01.jpg',
    label: 'Dukemiye Premium Oil',
    description: '100% pure organic cooking oil'
  },
  {
    src: '/special-products/natura milk.jpg',
    label: 'Natura Fresh Milk',
    description: 'Farm-fresh pasteurized milk'
  },
  {
    src: '/cards/IMG_7716.jpg',
    label: 'Aqua Mineral Water',
    description: '1L purified drinking water'
  },
  {
    src: '/cards/IMG_7713.jpg',
    label: 'Royal Energy Tonic',
    description: 'Herbal energy booster'
  },
  {
    src: '/special-products/astu enjera.png',
    label: 'Astu Traditional Enjera',
    description: 'Authentic fermented flatbread'
  },
  {
    src: '/special-products/royal.jpg',
    label: 'Royal Gourmet Spread',
    description: 'Premium fruit preserves'
  },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const nextImage = () => {
    setPhotoIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setPhotoIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-amber-500 bg-clip-text text-transparent mb-4">
            Our Premium Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive product line crafted with quality and care
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <div className="aspect-square relative">
                <Image
                  fill
                  src={img.src}
                  alt={img.label}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-white text-xl font-bold">{img.label}</h3>
                    <p className="text-gray-200 text-sm mt-1">{img.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative max-w-5xl w-full mx-4"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all"
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all"
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-12 right-0 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-lg transition-all"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              {/* Main Image */}
              <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={images[photoIndex].src}
                    alt={images[photoIndex].label}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="p-6 bg-gradient-to-r from-emerald-50 to-amber-50">
                  <h3 className="text-2xl font-bold text-gray-800">{images[photoIndex].label}</h3>
                  <p className="text-gray-600 mt-2">{images[photoIndex].description}</p>
                  <div className="flex items-center mt-4 space-x-2">
                    {Array(5).fill(0).map((_, i) => (
                      <span key={i} className="text-amber-400">
                        ★
                      </span>
                    ))}
                    <span className="text-sm text-gray-500 ml-2">Premium Product</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;