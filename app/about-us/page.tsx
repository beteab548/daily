// components/AboutMiniMarket.tsx
import Image from "next/image";
import GoogleMapEmbed from "./googlemap";

const AboutMiniMarket = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4 ">
      <h2 className="text-3xl font-semibold mb-10 text-gray-700">
        About Our Mini Market
      </h2>
      <div className="flex flex-col md:flex-row items-center space-y-8  md:space-y-0">
        <div className="w-full md:w-1/2 ml-6">
          <Image
            src="/Daily-mart.jpg" // Replace with your image path
            alt="Mini Market"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="text-lg text-gray-700">
            Welcome to our Mini Market, where quality meets convenience! We
            offer a variety of fresh produce, snacks, beverages, and household
            essentials. Our goal is to provide you with a seamless shopping
            experience with a focus on freshness and customer satisfaction.
            Whether you're looking for a quick snack or weekly groceries, we
            have you covered. Visit us today and discover great deals and a wide
            selection of products!
          </p>
        {/* <GoogleMapEmbed /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMiniMarket;
