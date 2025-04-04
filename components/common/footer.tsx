import {
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHome
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="  mt-12 py-6 w-full text-center border-t-gray-400 border-t-1">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-lg font-semibold">Contact Us</h2>
        <div className="flex space-x-4 mt-3">
          <p className="flex items-center">
            <FaPhone className="mr-2" /> +251 934 567 890
          </p>
          <p className="flex items-center">
            <FaHome className="mr-2" /> daily mini market
          </p>
          <div className="felx flex-col">
            <p className="flex  items-center">
              <FaMapMarkerAlt className="mr-2" /> abig building , Kazanchis
            </p>
          </div>
        </div>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://web.facebook.com/Dailyminimart0/?_rdc=1&_rdr#"
            className="text-black hover:text-gray-600"
            target="_blank"
          >
            <FaFacebook size={24} />
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; 2025 Daily Mini Mart.All rights reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
