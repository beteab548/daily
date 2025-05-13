"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { FaFacebook, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

function NavHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const socialLinks = [
    { icon: <FaFacebook size={20} />, label: "Facebook", url: "#" },
    { icon: <FaTiktok size={20} />, label: "Instagram", url: "#" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50  backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/daily-logo.png"
              width={80}
              height={80}
              alt="Daily Logo"
              className="hover:scale-105 transition-transform"
              priority
              unoptimized
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 ">
            <div className="flex items-center space-x-6 ">
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
            </div>

            <div className="h-6 w-px bg-gray-300 mx-2"></div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.url}
                  className="text-gray-500 hover:text-amber-500 transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed left-0 top-0 h-full w-72 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={() => setMenuOpen(false)}>
                    <Image
                      src="/daily-logo.png"
                      width={70}
                      height={70}
                      alt="Daily Logo"
                    />
                  </Link>
                  <button
                    className="p-2 rounded-full hover:bg-gray-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col space-y-4 flex-grow">
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
                </nav>

                <div className="flex space-x-4 pt-8 justify-center">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ y: -2, scale: 1.1 }}
                      href={social.url}
                      className="p-2 text-gray-500 hover:text-amber-500 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </header>
    </>
  );
}

interface NavLinkProps {
  href: string;
  currentPath: string;
  children: React.ReactNode;
}

function NavLink({ href, currentPath, children }: NavLinkProps) {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`relative px-1 py-2 text-sm font-medium transition-colors ${
        isActive ? "text-amber-600" : "text-gray-700 hover:text-amber-500"
      }`}
    >
      {children}
      {isActive && (
        <motion.span
          layoutId="nav-underline"
          className="absolute left-0 top-full h-0.5 w-full bg-amber-500"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

function MobileNavLink({ href, currentPath, children, onClick }: MobileNavLinkProps) {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
        isActive
          ? "bg-amber-50 text-amber-600"
          : "text-gray-700 hover:bg-gray-100 hover:text-amber-500"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavHeader;