"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function BusinessAboutUs() {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Full-width hero image */}
      <div className="relative h-[80vh] min-h-[600px]">
        <Image
          src="/cards/IMG_7703.jpg"
          alt="Our Business"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Building <span className="text-amber-400">Excellence</span> Since Day One
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              We're not just a company - we're a movement dedicated to delivering unparalleled quality and service to our community.
            </p>
            <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors">
              Our Story →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Stats section */}
      <div className="py-20 bg-orange-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "15+", label: "Years Experience" },
            { value: "500+", label: "Happy Clients" },
            { value: "24/7", label: "Customer Support" },
            { value: "100%", label: "Satisfaction Guarantee" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-green-700 mb-2">{stat.value}</p>
              <p className="text-green-800">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}