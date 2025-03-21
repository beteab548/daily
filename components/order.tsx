import IconButton from "./links";
import OrderImageContainer from "./order-image";
import Typewriter from "./text";

function OrderImages({ image }: { image: string }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-28 ">
      {image == "market" ? (
        <>
          <div className="flex flex-row ">
            <div>
              <OrderImageContainer
                src={`${
                  image == "market" ? "daily-mart-image.jpg" : "order-image.jpg"
                }`}
                alt="hover me"
                className="ml-60"
              />
            </div>
            <div className="flex justify-center  items-center font-serif text-4xl gap-8 ml-50">
              <p>Visit Our Market</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center flex-col items-center font-serif text-4xl gap-8 pl-35 ">
            <Typewriter />
            <div className="flex flex-row space-x-5">
              <IconButton type="market" />
              <IconButton type="appstore" />
            </div>
          </div>
          <div>
            <OrderImageContainer
              src={`${
                image == "market" ? "daily-mart-image.jpg" : "order-image.jpg"
              }`}
              alt="hover me"
            />
          </div>
        </>
      )}
    </div>
  );
}
export default OrderImages;
