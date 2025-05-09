'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';

const products = [
  {
    id: 1,
    src: '/special-products/dukemiye-01.jpg',
    label: 'Dukemiye Premium Food Oil',
    description: '100% pure Ethiopian sesame oil for authentic flavors',
    category: 'Pantry Essentials',
    features: ['Cold-pressed', 'Rich in antioxidants', 'No additives']
  },
  {
    id: 2,
    src: '/special-products/natura-milk.jpg',
    label: 'Natura Farm Fresh Milk',
    description: 'Pasteurized milk from grass-fed Ethiopian cows',
    category: 'Dairy',
    features: ['Hormone-free', 'Vitamin D enriched', '1L bottle']
  },
  {
    id: 3,
    src: '/special-products/royal-tonic.jpg',
    label: 'Royal Tonic Drink',
    description: 'Herbal energy drink with natural ingredients',
    category: 'Beverages',
    features: ['No artificial sweeteners', 'Herbal blend', '330ml can']
  },
  {
    id: 4,
    src: '/special-products/aqua-1L.jpg',
    label: 'Aqua 1L Mineral Water',
    description: 'Sourced from Ethiopian mountain springs',
    category: 'Water',
    features: ['Natural minerals', 'PH balanced', 'BPA-free bottle']
  },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);
  const [featuredProduct, setFeaturedProduct] = useState(0);

  // Filter products
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  // Set featured product when filtered
  useEffect(() => {
    if (filteredProducts.length > 0 && !filteredProducts.some(p => p.id === products[featuredProduct].id)) {
      setFeaturedProduct(0);
    }
  }, [filteredProducts, featuredProduct]);

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

  const selectFeatured = (index: number) => {
    setFeaturedProduct(filteredProducts.findIndex(p => p.id === products[index].id));
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
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-200/20 to-emerald-200/20"
            initial={{
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              opacity: 0
            }}
            animate={{
              opacity: [0, 0.1, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

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
            Premium Product Showcase
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our curated selection of authentic Ethiopian products
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === category 
                ? 'bg-emerald-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-gray-100 border'}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Gallery Layout - Creative Split View */}
        <div className="flex flex-col lg:flex-row gap-8 mb-20">
          {/* Left Column - Thumbnails */}
          <div className="lg:w-2/5 flex flex-col gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer ${featuredProduct === index ? 'ring-2 ring-emerald-500' : ''}`}
                onClick={() => selectFeatured(index)}
              >
                <div className="flex">
                  <div className="w-1/3 h-32 relative">
                    <Image
                      src={product.src}
                      alt={product.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="w-2/3 p-4 bg-white">
                    <span className="text-xs text-emerald-600 font-medium">{product.category}</span>
                    <h3 className="text-lg font-semibold text-gray-800 mt-1">{product.label}</h3>
                    <p className="text-gray-600 text-sm mt-1 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center mt-3">
                      <button 
                        className="text-emerald-600 hover:text-emerald-800 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to cart logic here
                        }}
                      >
                        <FiShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Featured Product */}
          {filteredProducts.length > 0 && (
            <motion.div 
              className="lg:w-3/5 relative rounded-2xl overflow-hidden shadow-xl bg-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-[500px] relative">
                <Image
                  src={filteredProducts[featuredProduct]?.src}
                  alt={filteredProducts[featuredProduct]?.label}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent flex items-end p-8">
                  <div>
                    <span className="text-emerald-300 font-medium">
                      {filteredProducts[featuredProduct]?.category}
                    </span>
                    <h3 className="text-3xl font-bold text-white mt-2">
                      {filteredProducts[featuredProduct]?.label}
                    </h3>
                    <p className="text-emerald-100 mt-2">
                      {filteredProducts[featuredProduct]?.description}
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                   
                      <button 
                        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium flex items-center gap-2 transition-colors"
                        onClick={() => openLightbox(featuredProduct)}
                      >
                        <FiZoomIn />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product features */}
              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredProducts[featuredProduct]?.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-500 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
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

            {/* Main image container */}
            <motion.div
              key={filteredProducts[currentIndex]?.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl h-full max-h-[80vh]"
            >
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