import AboutUS from "@/components/about-us";
import CatagoryImages from "@/components/catagory-shop";
import ImageContainers from "@/components/image-container";
import ImageSlider from "@/components/image-slider";
import OrderImages from "@/components/order";
import Gallery from "@/components/our-brand";
import ReviewCarousel from "@/components/review";

function RootPage() {
  return (
    <>
      <ImageSlider />
      <ImageContainers />
      <CatagoryImages />
      <Gallery />
      <AboutUS/>
      <OrderImages image="download-app" />
      <OrderImages image="market" />
      {/* <ReviewCarousel /> */}
    </>
  );
}
export default RootPage;
