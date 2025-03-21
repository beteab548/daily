import CatagoryImages from "@/components/catagory-shop";
import ImageContainers from "@/components/image-container";
import ImageSlider from "@/components/image-slider";
import OrderImages from "@/components/order";
import ReviewCarousel from "@/components/review";

function RootPage() {
  return (
    <>
      <ImageSlider />
      <ImageContainers />
      <CatagoryImages />
      <OrderImages />
      <ReviewCarousel />
    </>
  );
}
export default RootPage;
