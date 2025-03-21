// components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-white py-6 shadow-md">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} daily mini market. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
