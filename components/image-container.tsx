import Image from "next/image";
import Link from "next/link";

function ImageContainers() {
  return (
    <div className="flex sm:-mt-0 -mt-85 mb-12 flex-wrap gap-4 mx-auto justify-center">
      {/* Image Card 1 */}
      <div className="flex flex-col md:flex-row relative shadow-2xl items-center group p-3 sm:p-4 lg:w-150 w-[90%] sm:w-full bg-white">
        <div className="flex flex-col">
          <h1 className="text-center font-serif md:text-left w-full text-sm sm:text-base">
            Fresh fruit on our product
          </h1>
          <div className="mt-2 sm:mt-4 flex justify-center md:justify-start">
            <Link href="/products">
              <button className="bg-amber-400 rounded-xl w-24 h-8 sm:w-28 sm:h-9 text-xs sm:text-sm hover:bg-amber-300 mb-3 sm:mb-0 hover:cursor-pointer">
                View Products
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-hidden flex justify-center">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/food-slide-show/fresh-fruits.jpg"
              width={180}
              height={120}
              className="w-40 sm:w-48 mb-4 sm:mb-6"
              unoptimized
              alt="daily image"
            />
          </div>
        </div>
      </div>

      {/* Image Card 2 */}
      <div className="flex flex-col md:flex-row relative shadow-2xl items-center p-3 sm:p-4 bg-white group w-[90%] sm:w-full lg:w-150">
        <div className="flex flex-col">
          <h1 className="text-center font-serif md:text-left w-full text-sm sm:text-base">
            Fresh vegetables on our product
          </h1>
          <div className="mt-2 sm:mt-4 flex justify-center md:justify-start">
            <Link href="/products">
              <button className="bg-amber-400 rounded-xl w-24 h-8 sm:w-28 sm:h-9 text-xs sm:text-sm hover:bg-amber-300 hover:cursor-pointer">
                View Products
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-hidden flex justify-center">
          <div className="transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/food-slide-show/organic-vegetables.jpg"
              width={180}
              height={120}
              className="w-40 sm:w-48"
              unoptimized
              alt="daily image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContainers;
