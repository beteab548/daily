import AboutUS from "@/components/about-us";
import CatagoryImages from "@/components/catagory-shop";
import ImageContainers from "@/components/image-container";
import ImageSlider from "@/components/image-slider";
import OrderImages from "@/components/order";
import Gallery from "@/components/our-brand";
import ReviewCarousel from "@/components/review";
import Card from "@/components/sub-components/cards";

function RootPage() {
  return (
    <div className="">
      <ImageSlider />
      <Card/>                       
      <ImageContainers />
      <Gallery />
      <AboutUS/>
      <ImageContainers />
      <OrderImages image="download-app" />
      <OrderImages image="market" />
      <CatagoryImages />
  
      {/* <ReviewCarousel /> */}
    </div>
  );
}
export default RootPage;
