"use client"
import Image from "next/image";
import CustomMap from "@/components/customMap.jsx";
const AboutMiniMarket = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4">
      <h2 className="text-3xl font-semibold mb-10 text-gray-700">
        About Our Mini Market
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        <div>
          <Image
            src="/daily-mart-image.jpg"
            alt="Mini Market"
            width={500}
            height={300}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Row 1: Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <p className="text-lg text-gray-700 leading-relaxed text-justify">
            Welcome to our Mini Market, where quality meets convenience! We
            offer a variety of fresh produce, snacks, beverages, and household
            essentials. Our goal is to provide you with a seamless shopping
            experience with a focus on freshness and customer satisfaction.
            Whether you're looking for a quick snack or weekly groceries, we
            have you covered. Visit us today and discover great deals and a wide
            selection of products!
          </p>
        </div>

        {/* Row 2: Full-width image across both columns */}
        <div className="col-span-1 md:col-span-2 mt-10 flex flex-col items-center">
          <h1 className="text-blue-950 mb-4 text-xl font-semibold">
            Our Locations
          </h1>
          {/* <Image
            src="/location map.png"
            width={600}
            height={400}
            unoptimized
            alt="Location Map"
            className="rounded-lg shadow-lg w-full h-auto"
          /> */}
          <CustomMap/>
        </div>
      </div>
    </section>
  );
};

export default AboutMiniMarket;
