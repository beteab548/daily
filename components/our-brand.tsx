'use client';
import React, { useState } from 'react';

const images = [
  {
    src: 'special-products/dukemiye-01.jpg',
    label: 'Dukemiye',
  },
  {
    src: 'special-products/natura milk.jpg',
    label: 'Natura Milk',
  },
  {
    src: 'special-products/royal.jpg',
    label: 'Royal',
  },
  {
    src: 'special-products/aqua 1L.jpg',
    label: 'Aqua 1L',
  },
  {
    src: 'special-products/astu enjera.png',
    label: 'Astu Enjera',
  },
  {
    src: 'special-products/royal.jpg',
    label: 'Royal',
  },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    
    <div className="bg-lime-100 bg-center bg-cover rounded-2xl py-16 px-4 sm:px-6 lg:px-8 m-4" suppressHydrationWarning>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-semibold font-serif text-gray-800">Our Own Brands</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 max-w-3xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg "
            onClick={() => {
              setPhotoIndex(index);
              setIsOpen(true);
            }}
          >
            <img
              src={img.src}
              alt={`Gallery ${index + 1}`}
              className="w-98 h-106 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Sliding overlay */}
            <div className="absolute bottom-0 left-0 w-full h-1/3  bg-gradient-to-t from-black/70 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{img.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

