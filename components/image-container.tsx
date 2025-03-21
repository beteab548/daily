import Image from "next/image";
import Link from "next/link";

function ImageContainers() {
  return (
    <div className="flex flex-row gap-8 mx-15 flex-wrap justify-center">
      {/* Image Card 1 */}
      <div className="flex relative shadow-2xl items-center p-2 bg-white group">
        <div>
          <h1 className="pl-2">Fresh fruit on our product</h1>
        </div>

        <div className="pl-1 w-74 overflow-hidden">
          <div className="transition-transform duration-300 group-hover:scale-110 ml-6 mb-8">
            <Image
              src="/food-slide-show/fresh-fruits.jpg"
              width={230}
              height={150}
              unoptimized
              alt="daily image"
            />
          </div>
        </div>

        <div className="absolute top-38">
          <Link href={"/products"}>
            <button className="bg-amber-400 rounded-2xl w-28 h-9 hover:bg-amber-300  ">
              view products
            </button>
          </Link>
        </div>
      </div>

      {/* Image Card 2 */}
      <div className="flex relative shadow-2xl items-center p-4 bg-white group">
        <div>
          <h1 className="pl-2">Fresh vegetable on our product</h1>
        </div>

        <div className="pl-1 w-74 overflow-hidden">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/food-slide-show/organic-vegetables.jpg"
              width={400}
              height={200}
              unoptimized
              alt="daily image"
            />
          </div>
        </div>

        <div className="absolute top-38">
          <Link href={"/products"}>
            <button className="bg-amber-400 rounded-2xl w-28 h-9 hover:bg-amber-300 ">
              view products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ImageContainers;
