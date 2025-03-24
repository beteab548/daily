import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-black  mt-12 py-6 w-full text-center">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <div className="flex space-x-4 mt-3">
          <p className="flex items-center">
            <FaPhone className="mr-2" /> +1 234 567 890
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-2" /> daily mini market
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" /> abig building , Kazanchis
          </p>
        </div>
        <div className="flex space-x-4 mt-4">
          {/* for dark theme */}

          {/* <a href="#" className="text-white hover:text-gray-400">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <FaInstagram size={24} />
          </a>  */}

          <a href="#" className="text-black hover:text-gray-600">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FaTelegram size={24} />
          </a>
          <a href="#" className="text-black hover:text-gray-600">
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="mt-4 text-sm">
          © 2025 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
