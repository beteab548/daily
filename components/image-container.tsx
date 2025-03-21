import Image from "next/image";

function ImageContainers() {
  return (
    <div className="flex flex-row gap-8 mx-15 flex-wrap justify-center">
      {/* Image Card 1 */}
      <div className="flex relative shadow-2xl items-center p-2 bg-white group">
        <div>
          <h1 className="pl-2">Fresh fruit on our product</h1>
        </div>

        <div className="pl-1 w-74 overflow-hidden">
          <div className="transition-transform duration-300 group-hover:scale-110">
            <Image
              src="/food-slide-show/fresh-fruits.jpg"
              width={400}
              height={200}
              unoptimized
              alt="daily image"
            />
          </div>
        </div>

        <div className="absolute top-38">
          <button className="bg-amber-400 rounded-2xl w-22 h-8">
            Shop Now
          </button>
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
          <button className="bg-amber-400 rounded-2xl w-22 h-8">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageContainers;
