
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi';
import Image from 'next/image';

const products = [
  {
    id: 1,
    src: '/special-products/dukemiye-01.jpg',
    label: 'Dukemiye Premium Food Oil',
    description: '100% pure Ethiopian sesame oil for authentic flavors',
    category: 'Pantry Essentials'
  },
  {
    id: 2,
    src: '/special-products/natura-milk.jpg',
    label: 'Natura Farm Fresh Milk',
    description: 'Pasteurized milk from grass-fed Ethiopian cows',
    category: 'Dairy'
  },
  {
    id: 3,
    src: '/special-products/royal-tonic.jpg',
    label: 'Royal Tonic Drink',
    description: 'Herbal energy drink with natural ingredients',
    category: 'Beverages'
  },
  {
    id: 4,
    src: '/special-products/aqua-1L.jpg',
    label: 'Aqua 1L Mineral Water',
    description: 'Sourced from Ethiopian mountain springs',
    category: 'Water'
  },
  {
    id: 5,
    src: '/special-products/astu-enjera.png',
    label: 'Astu Traditional Enjera',
    description: 'Authentic teff enjera, ready to serve',
    category: 'Bakery'
  },
  {
    id: 6,
    src: '/special-products/royal-coffee.jpg',
    label: 'Royal Ethiopian Coffee',
    description: 'Single-origin Yirgacheffe specialty coffee',
    category: 'Coffee'
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  // Filter products
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  // Lightbox controls
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentIndex]);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Gallery Grid */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-400 to-green-900 opacity-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Gallary
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full"></div>
        </motion.div>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            {/* Image with parallax effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="h-80 overflow-hidden relative"
            >
              <Image
                src={product.src}
                alt={product.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <FiZoomIn className="text-white text-3xl opacity-80" />
              </div>
            </motion.div>

            {/* Product info */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
              <span className="text-emerald-300 text-xs font-medium">{product.category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{product.label}</h3>
              <p className="text-emerald-200 text-sm mt-1 line-clamp-1">{product.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox - Now properly showing the image */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors z-10"
              aria-label="Close lightbox"
            >
              <FiX size={28} />
            </button>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-6 text-white hover:text-emerald-400 transition-colors z-10 p-2 bg-black/30 rounded-full"
              aria-label="Previous image"
            >
              <FiChevronLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-6 text-white hover:text-emerald-400 transition-colors z-10 p-2 bg-black/30 rounded-full"
              aria-label="Next image"
            >
              <FiChevronRight size={32} />
            </button>

            {/* Main image container - Now properly sized */}
            <motion.div
              key={filteredProducts[currentIndex]?.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-full max-h-[80vh]"
            >
              {/* The actual image - now properly displayed */}
              <Image
                src={filteredProducts[currentIndex]?.src || ''}
                alt={filteredProducts[currentIndex]?.label || ''}
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Caption */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-8 left-0 right-0 text-center text-white"
            >
              <h3 className="text-2xl font-bold">
                {filteredProducts[currentIndex]?.label}
              </h3>
              <p className="text-gray-300 mt-2 max-w-md mx-auto">
                {filteredProducts[currentIndex]?.description}
              </p>
            </motion.div>

            {/* Thumbnail strip */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {filteredProducts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-emerald-400 w-6' : 'bg-white/30'}`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;