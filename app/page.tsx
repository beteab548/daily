import CatagoryImages from "@/components/catagoryShop";
import ImageContainers from "@/components/image-container";
import ImageSlider from "@/components/imageSlider";

function RootPage() {
  return (
    <>
      <ImageSlider />
      <ImageContainers />
      <CatagoryImages />
    </>
  );
}
export default RootPage;
