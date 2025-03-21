"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import ThemeSwitcher from "../themeSwitcher";

function NavHeader() {
  const pathname = usePathname(); // Get current path

  return (
    <>
      <div className="grid gap-4 grid-cols-7 px-2 py-4 sticky top-0 bg-white/30 backdrop-blur-md z-10">
        <div className="col-span-2">
          <div className="relative top-0">
            <Image
              src="/cropped daily logo.jpg"
              width={80}
              height={80}
              alt="logo"
              unoptimized
            />
          </div>
        </div>
        <div className="flex justify-center pt-2 pr-30 col-span-4 space-x-10">
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
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}

// Reusable NavLink component
function NavLink({
  href,
  currentPath,
  children,
}: {
  href: string;
  currentPath: string;
  children: React.ReactNode;
}) {
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
