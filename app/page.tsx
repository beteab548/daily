import CatagoryImages from "@/components/catagory-shop";
import ImageContainers from "@/components/image-container";
import ImageSlider from "@/components/image-slider";
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
