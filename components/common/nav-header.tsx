'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

function NavHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 ${scrolled ? 'bg-white/95 shadow-md' : 'bg-white/90'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with shine effect */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              className="relative overflow-hidden rounded-lg"
            >
              <Link href="/" className="block">
                <Image
                  src="/daily-logo.png"
                  width={100}
                  height={100}
                  alt="Daily Mini Mart"
                  className="hover:opacity-90 transition-opacity"
                  priority
                />
              </Link>
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 300, opacity: 0.4 }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 5
                }}
                className="absolute top-0 left-0 h-full w-16 bg-white/30 skew-x-12"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <NavLink href="/" currentPath={pathname}>
                Home
              </NavLink>
              <NavLink href="/products" currentPath={pathname}>
                Products
              </NavLink>
              <NavLink href="/gallery" currentPath={pathname}>
                Gallery
              </NavLink>
              <NavLink href="/about-us" currentPath={pathname}>
                About Us
              </NavLink>
              <NavLink href="/contact" currentPath={pathname}>
                Contact
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={28} className="text-gray-700" /> : <Menu size={28} className="text-gray-700" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 w-80 h-full bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Menu Header */}
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    <Image
                      src="/daily-logo.png"
                      width={80}
                      height={80}
                      alt="Daily Mini Mart"
                    />
                  </Link>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100"
                  >
                    <X size={24} className="text-gray-700" />
                  </motion.button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 flex flex-col space-y-2">
                  <MobileNavLink href="/" currentPath={pathname} onClick={() => setMenuOpen(false)}>
                    Home
                  </MobileNavLink>
                  <MobileNavLink href="/products" currentPath={pathname} onClick={() => setMenuOpen(false)}>
                    Products
                  </MobileNavLink>
                  <MobileNavLink href="/gallery" currentPath={pathname} onClick={() => setMenuOpen(false)}>
                    Gallery
                  </MobileNavLink>
                  <MobileNavLink href="/about-us" currentPath={pathname} onClick={() => setMenuOpen(false)}>
                    About Us
                  </MobileNavLink>
                  <MobileNavLink href="/contact" currentPath={pathname} onClick={() => setMenuOpen(false)}>
                    Contact
                  </MobileNavLink>
                </nav>

                {/* Footer Section */}
                <div className="mt-auto pt-6 border-t border-gray-200">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ y: -2 }}
                        href="#"
                        className="text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        <FaFacebook size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        href="#"
                        className="text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        <FaInstagram size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -2 }}
                        href="#"
                        className="text-emerald-600 hover:text-emerald-700 transition-colors"
                      >
                        <FaWhatsapp size={20} />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <Phone className="mr-3 text-emerald-500" size={18} />
                    <span>+251 911 234 567</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Enhanced NavLink Component with magnetic effect
function NavLink({ href, currentPath, children }: { href: string; currentPath: string; children: React.ReactNode }) {
  const isActive = currentPath === href;
  
  return (
    <Link href={href} passHref>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative px-5 py-3"
      >
        <span className={`text-lg font-medium transition-colors ${isActive ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-500'}`}>
          {children}
        </span>
        {isActive && (
          <motion.span
            layoutId="navActiveIndicator"
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-emerald-500 rounded-full"
            transition={{ type: 'spring', bounce: 0.25, duration: 0.6 }}
          />
        )}
      </motion.div>
    </Link>
  );
}

// Mobile NavLink Component
function MobileNavLink({ href, currentPath, onClick, children }: 
  { href: string; currentPath: string; onClick: () => void; children: React.ReactNode }) {
  const isActive = currentPath === href;
  
  return (
    <Link href={href} passHref>
      <motion.div
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`py-4 px-5 rounded-xl text-lg font-medium transition-colors ${isActive ? 'bg-emerald-50 text-emerald-600' : 'text-gray-700 hover:bg-gray-100'}`}
      >
        <div className="flex items-center">
          {children}
          {isActive && (
            <motion.div
              layoutId="mobileActiveDot"
              className="ml-2 w-2 h-2 bg-emerald-500 rounded-full"
            />
          )}
        </div>
      </motion.div>
    </Link>
  );
}

export default NavHeader;