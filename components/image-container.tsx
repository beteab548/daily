import Image from "next/image";

function ImageContainers() {
  return (
    <>
      <div className="grid grid-cols-2 m-8 bg-amber-300 gap-6">
        <div className=" pl-3 relative">
          <Image
            src={"/cropped image.jpg"}
            width={500}
            height={300}
            unoptimized
            alt="daily image"
          />
          <h1 className=" absolute top-20">this is the image text</h1>
        </div>
        <div className=" relative">
          <Image
            src={"/cropped image.jpg"}
            width={400}
            height={300}
            unoptimized
            alt="daily image"
          />
          <h1 className=" absolute top-20">this is the image text</h1>
        </div>
      </div>
    </>
  );
}
export default ImageContainers;
