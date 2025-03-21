import IconButton from "./links";
import OrderImageContainer from "./order-image";

function OrderImages() {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="flex justify-center flex-col items-center font-serif text-4xl gap-8 ">
        <p>Order Our App From</p>
        <div className="flex flex-row gap-6">
          <IconButton type={"playstore"} />
          <IconButton type={"appstore"} />
        </div>
      </div>
      <div>
        <OrderImageContainer src="order-image.jpg" alt="hover me" />
      </div>
    </div>
  );
}
export default OrderImages;
