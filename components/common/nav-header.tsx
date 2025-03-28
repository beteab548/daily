"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function NavHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        suppressHydrationWarning
        className={` flex justify-between items-center px-4 py-4 sticky top-0  backdrop-blur-md z-40 shadow-md text-white`}
      >
        <div>
          <Link href={"/"}>
            <Image
              src="/cropped daily logo.jpg"
              width={80}
              height={80}
              alt="logo"
              unoptimized
            />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className={`hidden md:flex space-x-10  `}>
          <NavLink href="/" currentPath={pathname}>
            Home
          </NavLink>
          <NavLink href="/products" currentPath={pathname}>
            Products
          </NavLink>
          <NavLink href="/about-us" currentPath={pathname}>
            About Us
          </NavLink>
        </div>
        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button
            className="md:hidden text-gray-800"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
      {/* Mobile Sidebar */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-md p-6 flex flex-col space-y-6  ">
            <button className="self-end" onClick={() => setMenuOpen(false)}>
              <X size={30} />
            </button>
            <NavLink href="/" currentPath={pathname}>
              Home
            </NavLink>
            <NavLink href="/products" currentPath={pathname}>
              Products
            </NavLink>
            <NavLink href="/about-us" currentPath={pathname}>
              About Us
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
interface Navlinks {
  href: string;
  currentPath: string;
  children: React.ReactNode;
}
function NavLink({ href, currentPath, children }: Navlinks) {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`hover:text-amber-400 ${
        isActive ? "text-amber-500 font-bold" : "text-gray-800"
      }`}
    >
      {children}
    </Link>
  );
}

export default NavHeader;
