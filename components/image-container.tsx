import Image from "next/image";
import Link from "next/link";

function ImageContainers() {
  return (
    <div className="flex sm:-mt-0 -mt-105 mb-12 flex-wrap gap-8 mx-auto justify-center  ">
      {/* Image Card 1 */}
      <div className=" sm:m-0 m-6 flex flex-col md:flex-row relative shadow-2xl items-center group  p-4 lg:w-150 w-full  ">
        <div className="flex flex-col">
          <h1 className="text-center font-serif md:text-left w-full">
            Fresh fruit on our product
          </h1>
          <div className="mt-4">
            <Link href="/products">
              <button className="bg-amber-400  rounded-2xl w-28 h-9 hover:bg-amber-300 mb-5 sm:mb-0 hover:cursor-pointer">
                View Products
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-hidden flex justify-center">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/food-slide-show/fresh-fruits.jpg"
              width={230}
              height={150}
              className="w-48 mb-6 ml-4 "
              unoptimized
              alt="daily image"
            />
          </div>
        </div>
      </div>
      {/* Image Card 2 */}
      <div className="flex flex-col md:flex-row relative shadow-2xl items-center p-4 bg-white group w-full  lg:w-150">
        <div className="flex flex-col">
          <h1 className="text-center font-serif md:text-left w-full">
            Fresh vegetables on our product
          </h1>
          <div className="mt-4">
            <Link href="/products">
              <button className="bg-amber-400 rounded-2xl w-28 h-9 hover:bg-amber-300 hover:cursor-pointer">
                View Products
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full overflow-hidden flex justify-center">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/food-slide-show/organic-vegetables.jpg"
              width={230}
              height={200}
              className="w-full "
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
