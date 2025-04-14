import Link from "next/link";
import {
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaHome,
  
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full h-72  bg-gradient-to-r from-lime-300 to-white  mt-12 py-8 border-t border-gray-300">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 text-left">
        {/* Column 1: Lorem */}
        <div>
          <h2 className="text-lg font-semibold mb-2">About Us</h2>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Fusce vel sapien elit. In malesuada semper mi, nec
            pulvinar sem tincidunt at.
          </p>
        </div>
        {/* Column 2: Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center">
              <FaPhone className="mr-2" /> +251 934 567 890
            </li>
            <li className="flex items-center">
              <MdEmail className="mr-2" /> dailyminimart@gamil.com
            </li>
            <li className="flex items-center">
              <FaHome className="mr-2" /> Daily Mini Market
            </li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <a
              href="https://web.facebook.com/Dailyminimart0/?_rdc=1&_rdr#"
              className="text-black hover:text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} /> 
            </a>
          </div>
        </div>
        {/* Column 3: Empty for now */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Explore</h2>
          <ul>
            <li className="flex items-center">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="flex items-center">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="flex items-center">
              <Link href={"/about-us"}>About us</Link>
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center text-xs text-gray-500 mt-6">
        &copy; 2025 Daily Mini Mart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
