import AboutUS from "@/components/about-us";
import CatagoryImages from "@/components/catagory-shop";
import ImageContainers from "@/components/image-container-1";
import ImageContainers2 from "@/components/image-container-2";
import ImageSlider from "@/components/banner-slider";
import OrderImages from "@/components/order";
import Gallery from "@/components/our-brand";
import Card from "@/components/cards";


function RootPage() {
  return (
    <div >
      <ImageSlider />
      <Card/>                       
      <ImageContainers />
      <ImageContainers2 />
      <Gallery />
      <AboutUS/>
      <OrderImages image="download-app" />
      <OrderImages image="market" />
      <CatagoryImages />
    </div>
  );
}
export default RootPage;
