import CatagoryImages from "@/components/catagoryShop";
import ImageContainers from "@/components/image-container";
import ImageSlider from "@/components/imageSlider";
import ProductTabs from "@/components/our-products";
import ReviewCarousel from "@/components/review";

function RootPage() {
  return (
    <>
      <ImageSlider />
      <ImageContainers />
      <CatagoryImages />
      <ProductTabs/>
      <ReviewCarousel/>
    </>
  );
}
export default RootPage;
