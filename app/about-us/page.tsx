import Image from "next/image";
import GoogleMapEmbed from "./googlemap";

const AboutMiniMarket = () => {
  return (
    <section className="flex flex-col items-center py-12 px-4 ">
      <h2 className="text-3xl font-semibold mb-10 text-gray-700">
        About Our Mini Market
      </h2>
      <div className="relative flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2 ml-3">
          <Image
            src="/Daily-mart.jpg"
            alt="Mini Market"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-y-10 text-center md:text-left">
          <p className="text-lg text-gray-700">
            Welcome to our Mini Market, where quality meets convenience! We
            offer a variety of fresh produce, snacks, beverages, and household
            essentials. Our goal is to provide you with a seamless shopping
            experience with a focus on freshness and customer satisfaction.
            Whether you're looking for a quick snack or weekly groceries, we
            have you covered. Visit us today and discover great deals and a wide
            selection of products!
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Image
          src={"/location map.png"}
          width={700}
          height={500}
          unoptimized
          alt="Location Map"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutMiniMarket;
